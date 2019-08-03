const express = require("express");
//
const router = express.Router();

const uploadService = require("../services/upload-service");

router.post("/image/:userId", (req, res) => {
  const userId = req.params.userId;
  const url = "http://localhost:3000/uploads/" + req.file.filename;

  userService
    .setImageUrl(userId, url)
    .then(user => {
      res.json({ user });
    })
    .catch(err => {
      res.status(400).json({ msg: err });
    });
});
