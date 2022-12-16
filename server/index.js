const express = require("express");
const dotenv = require('dotenv').config();
const cors = require('cors');
const compression = require('compression');
const path = require("path");
const app = express();

let PORT = process.env.PORT || 3000;

const initializeApp = () => {
// Middleware
var bodyParser = require('body-parser');


app.use(cors())
app.use(compression(9))
app.use(bodyParser.json()); // <--- Here
app.use(bodyParser.urlencoded({extended: true}));
// Routes
const Controller = require("./controller.js");
app.use(express.static(path.join(__dirname, "../public")));

// Use app.get("*", ...) to serve the index.html file for all routes that are not explicitly defined. This is necessary for the client-side routing to work properly. Specifically, if you don't have this, then when you refresh the page while on a route other than "/", you will get a 404 error.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post("/contact", Controller.post);

console.log(`Server listening at http://localhost:${PORT}`);

//app.listen(PORT);

return app;
};

const server = initializeApp();
module.exports = server.listen(PORT);
