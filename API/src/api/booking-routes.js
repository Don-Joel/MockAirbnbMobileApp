// importing express
const express = require("express");
//
const router = express.Router();

//import properties class
const Booking = require("../model/bookings-model");

//get all of the properties
router.get("/get", (req, res) => {
  Booking.prototype
    .getAll()
    .then(bookings => {
      res.send(bookings);
    })
    .catch(err => {
      res.send(err);
    });
});

// get the property by ID
router.get("/getbyid/:id", (req, res) => {
  Booking.prototype
    .getById(req.params.id)
    .then(bookings => {
      res.send(bookings);
    })
    .catch(err => {
      res.send(err);
    });
});

//create the property
router.post("/create", (req, res) => {
  Booking.prototype
    .create(req.body)
    .then(bookings => {
      res.send(bookings);
    })
    .catch(err => {
      res.send(err);
    });
});

//update the property
router.post("/update/:id", (req, res) => {
  Booking.prototype
    .updateById(req.params.id, req.body)
    .then(bookings => {
      res.send(bookings);
    })
    .catch(err => {
      res.send(err);
    });
});

//delete property
router.delete("/delete/:id", (req, res) => {
  Booking.prototype
    .removeUser(req.body)
    .then(bookings => {
      res.send(bookings);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
