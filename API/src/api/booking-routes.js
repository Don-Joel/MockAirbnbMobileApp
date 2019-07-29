// importing express
const express = require("express");
//
const router = express.Router();

//import bookings class
const Booking = require("../model/bookings-model");

//get all of the bookings
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

// get the booking by ID
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

// get the booking by property ID
router.get("/getbyPropertyId/:id", (req, res) => {
  Booking.prototype
    .getByPropertyId(req.params.id)
    .then(bookings => {
      res.send(bookings);
    })
    .catch(err => {
      res.send(err);
    });
});

//create the booking
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

//update the booking
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

//delete booking
router.post("/delete/:id", (req, res) => {
  Booking.prototype
    .remove(req.body)
    .then(bookings => {
      res.send(bookings);
    })
    .catch(err => {
      res.send(err);
    });
});

//delete booking
router.post("/deleteAll/", (req, res) => {
  Booking.prototype
    .removeAll(req.body.propertyId)
    .then(bookings => {
      res.send(bookings);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
