// importing express
const express = require("express");
//
const router = express.Router();

//import properties class
const User = require("../model/properties-model");

//get all of the properties
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

// get the property by ID
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

//create the property
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

//update the property
router.patch("/update/:id", (req, res) => {
  User.prototype
    .updateUserByID(req.params.id, req.body)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.send(err);
    });
});

//delete property
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
