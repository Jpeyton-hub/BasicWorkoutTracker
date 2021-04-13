const { static } = require('express');
const express = require('express');
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}/`);
});