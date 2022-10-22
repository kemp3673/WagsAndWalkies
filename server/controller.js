const Model = require("./model.js");

const post = (req, res) => {
  Model.sendEmail(req, res);
};

module.exports = {
  post
};