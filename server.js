const { static } = require('express');
const express= require('express');
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.use(express.static('public'));
