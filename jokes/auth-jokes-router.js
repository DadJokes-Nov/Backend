const router = require("express").Router();
const Jokes = require("./jokes-model.js");
const authenticate = require("../auth/authenticate-middleware.js");

router.get("/", authenticate, (req, res) => {
  Jokes.getJokesbyUserId({ users_id: req.loggedInUser.subject })
    .then(jokes => {
      if (jokes) {
        res.status(200).json(jokes);
      } else {
        res.json({
          message: "Access to jokelist Denied!!!"
        });
      }
    })
    .catch(err => {
      res.send(err);
    });
});

router.get("/:id", authenticate, validateJokeId, (req, res) => {
  res.status(200).json(req.joke);
});

router.post("/", authenticate, validateJokeBody, (req, res, next) => {
  Jokes.add(req.body)
    .then(joke => {
      res.status(201).json(joke);
    })
    .catch(next);
});

router.put("/:id", validateJokeId, validateJokeBody, (req, res, next) => {
  Jokes.update(req.body, req.joke.id)
    .then(updatedScheme => {
      res.status(200).json(updatedScheme);
    })
    .catch(next);
});

router.delete("/:id", validateJokeId, (req, res, next) => {
  Jokes.remove(req.joke.id)
    .then(() => {
      res.status(204).json(req.joke);
    })
    .catch(next);
});

//validation middleware
function validateJokeId(req, res, next) {
  const { id } = req.params;
  let validId = Number(id);
  if (!Number.isInteger(validId) && validId > 0) {
    next({ message: "Invalid joke id" });
  }
  Jokes.getJoke({ id: validId })
    .then(joke => {
      if (joke) {
        req.joke = joke;
        next();
      } else {
        next({ message: "Could not find joke with given id", status: 404 });
      }
    })
    .catch(next);
}
function validateJokeBody(req, res, next) {
  const { punchline, jokes_description } = req.body;
  if (!punchline || !jokes_description) {
    next({
      message: "Missing required `punchline` and `jokes_description` fields",
      status: 401
    });
  } else {
    req.body = { punchline, jokes_description };
    next();
  }
}

//error middleware
router.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .json({
      file: "auth-jokes-router",
      method: req.method,
      url: req.url,
      status: error.status || 500,
      message: error.message
    })
    .end();
});

module.exports = router;
