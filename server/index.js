const express = require("express");
const dotenv = require('dotenv').config()
const cors = require('cors');
const compression = require('compression');
const path = require("path");
const app = express();

// Middleware
var bodyParser = require('body-parser');


app.use(cors())
app.use(compression(9))
app.use(bodyParser.json()); // <--- Here
app.use(bodyParser.urlencoded({extended: true}));
// Routes
const Controller = require("./controller.js");

let PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "../public")));

app.post("/contact", Controller.post);

console.log(`Server listening at http://localhost:${PORT}`);

app.listen(3000);