const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET || "secret";
  if (token) {
    jwt.verify(token, secret, (err, decodedUser) => {
      if (err) {
        next({ message: err, status: 400 });
      } else {
        req.loggedInUser = decodedUser;
        next();
      }
    });
  } else {
    next({ message: "YOU SHALL NOT PASS!", status: 401 });
  }
};
