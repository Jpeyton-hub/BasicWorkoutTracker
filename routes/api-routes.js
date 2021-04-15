const express = require("express");
const router = express.Router();
let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

router.post("/workouts", (req, res) => {
  console.log(`post request ${req.body}`);
    db.Workout.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      throw err;
    });
});

router.put("/workouts/:id", (req, res) => {
  console.log(`put request ${req.body}`);
    db.Workout.updateOne({_id : req.params.id}, {$push: req.body})
});

router.get("/workouts", (req, res) => {
  db.Workout.find({})
    .then((data) => res.json(data))
    .catch((err) => {
      throw err;
    });
});

module.exports = router;
