// importing express
const express = require("express");
//
const router = express.Router();

const User = require("../model/user-model");

//get all of the users
router.get("/get", (req, res) => {
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
router.get("/getbyid/:id", (req, res) => {
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
router.post("/create", (req, res) => {
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
    .updateById(req.params.id, req.body)
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

router.post("/image/:userId", (req, res) => {
  const userId = req.params.userId;
  const url = "http://localhost:3000/uploads/" + req.file.filename;

  User.prototype
    .setImageUrl(userId, url)
    .then(user => {
      res.json({ user });
    })
    .catch(err => {
      res.status(400).json({ msg: err });
    });
});

module.exports = router;
