const { static } = require('express');
const express = require('express');
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}/`);
});