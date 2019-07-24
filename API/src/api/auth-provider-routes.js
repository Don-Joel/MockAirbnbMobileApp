const express = require("express");

const router = express.Router();

const authProviderService = require("../services/auth-provider-service");

// sending login information to database, so post method is used
router.post("/login", (req, res) => {
  authProviderService.prototype
    .login(req.body)
    .then(users => {
      console.log("logging in");
      console.log(users);
      res.send(users);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

// sending register information to database, so post method is used
router.post("/register", (req, res) => {
  authProviderService.prototype
    .register(req.body)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

module.exports = router;
