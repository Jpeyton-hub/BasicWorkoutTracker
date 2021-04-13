const express = require("express");
const router = express.Router();
let mongoose = require("mongoose");
let db = require("../models");

router.post("/workouts", (req, res) => {
    db.Workout.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      throw err;
    });
});

router.put("/workouts/:id", (req, res) => {
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
