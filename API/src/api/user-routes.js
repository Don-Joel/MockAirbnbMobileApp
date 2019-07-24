// importing express
const express = require("express");
//
const router = express.Router();

const User = require("../model/user-model");

//get all of the users
router.get("/getusers", (req, res) => {
  User.prototype
    .getAll()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.send(err);
    });
});

// get the user by ID
router.get("/getuserbyid/:id", (req, res) => {
  User.prototype
    .getById(req.params.id)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.send(err);
    });
});

//create the user
router.post("/createusers", (req, res) => {
  User.prototype
    .create(req.body)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.send(err);
    });
});

//update the user
router.post("/update/:id", (req, res) => {
  User.prototype
    .updateUserByID(req.params.id, req.body)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.send(err);
    });
});

//delete user
router.delete("/delete/:id", (req, res) => {
  User.prototype
    .removeUser(req.body)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
