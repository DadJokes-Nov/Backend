const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("./auth-model");

router.post("/register", validateUserBody, (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 11);
  Users.add({ username, email, password: hashedPassword })
    .then(user => {
      res.status(201).json({ id: user.id, username: user.username });
    })
    .catch(next);
});

router.post("/login", validateUserBody, (req, res, next) => {
  const { username, password } = req.body;
  Users.getUser({ username })
    .then(user => {
      if (!user) {
        next({ message: "Invalid credentials", status: 400 });
      } else {
        const isValidPassword = bcrypt.compareSync(password, user.password);
        if (!isValidPassword) {
          next({ message: "Invalid credentials", status: 400 });
        } else {
          const token = generateToken(user);
          res.status(200).json({
            message: `Welcome ${user.username}!`,
            token: token
          });
        }
      }
    })
    .catch(next);
});

// validate the user register and login post req.body
function validateUserBody(req, res, next) {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    next({
      message:
        "Missing one of the required `username` , `email` or `password` fields!",
      status: 401
    });
  } else {
    req.body = { username, email, password };
    next();
  }
}

// error middleware
router.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .json({
      file: "auth-router",
      method: req.method,
      url: req.url,
      status: error.status || 500,
      message: error.message
    })
    .end();
});

//token generator
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "1d"
  };

  const secret = process.env.JWT_SECRET || "secret";
  const result = jwt.sign(payload, secret, options);

  return result;
}

module.exports = router;
