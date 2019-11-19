// const axios = require("axios");

// const router = require("express").Router();

// router.get("/", (req, res) => {
//   const requestOptions = {
//     headers: { accept: "application/json" }
//   };

//   axios
//     .get("https://icanhazdadjoke.com/search", requestOptions)
//     .then(response => {
//       res.status(200).json(response.data.results);
//     })
//     .catch(err => {
//       res.status(500).json({ message: "Error Fetching Jokes", error: err });
//     });
// });

// module.exports = router;


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