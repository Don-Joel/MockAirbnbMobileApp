// importing express
const express = require("express");
//
const router = express.Router();

//import properties class
const Property = require("../model/properties-model");

//get all of the properties
router.get("/get", (req, res) => {
  Property.prototype
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
  Property.prototype
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
  Property.prototype
    .create(req.body)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get("/getByProviderId/:id", (req, res) => {
  Property.prototype
    .getByProviderId(req.params.id)
    .then(providerId => {
      res.send(providerId);
    })
    .catch(err => {
      res.send(err);
    });
});

//update the property
router.post("/update/:id", (req, res) => {
  Property.prototype
    .updateById(req.params.id, req.body)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get("/getbyProviderId/:id", (req, res) => {
  Property.prototype
    .getByProviderId(req.params.id)
    .then(provider => {
      res.send(provider);
    })
    .catch(err => {
      res.send(err);
    });
});

//delete property
router.post("/delete/", (req, res) => {
  Property.prototype
    .remove(req.body.id)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
