const express = require('express');
const router = express.Router();
let mongoose = require("mongoose");
let db = require("../models");

router.post("/api/workouts", (req, res) => {
    db.Workout
});

router.put("/api/workouts", (req, res) => {
    db.Workout
});

module.exports = router;