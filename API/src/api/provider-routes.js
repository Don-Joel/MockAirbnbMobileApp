// importing express
const express = require("express");
//
const router = express.Router();

const Provider = require("../model/provider-model");

//get all of the users
router.get("/get", (req, res) => {
  Provider.prototype
    .getAll()
    .then(provider => {
      res.send(provider);
    })
    .catch(err => {
      res.send(err);
    });
});

// get the user by ID
router.get("/getbyid/:id", (req, res) => {
  Provider.prototype
    .getById(req.params.id)
    .then(provider => {
      res.send(provider);
    })
    .catch(err => {
      res.send(err);
    });
});

//create the user
router.post("/create", (req, res) => {
  Provider.prototype
    .create(req.body)
    .then(provider => {
      res.send(provider);
    })
    .catch(err => {
      res.send(err);
    });
});

//update the user
router.post("/update/:id", (req, res) => {
  Provider.prototype
    .updateById(req.params.id, req.body)
    .then(provider => {
      res.send(provider);
    })
    .catch(err => {
      res.send(err);
    });
});

//delete user
router.delete("/delete/:id", (req, res) => {
  Provider.prototype
    .removeUser(req.body)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
