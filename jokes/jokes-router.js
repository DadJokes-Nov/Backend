const router = require("express").Router();
const Jokes = require("./jokes-model.js");

router.get("/", (req, res) => {
  Jokes.getJokes()
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



module.exports = router;