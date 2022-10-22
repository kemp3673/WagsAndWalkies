// const axios = require('axios');
const nodemailer = require('nodemailer');
const dotenv = require("dotenv");


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  },
  port: 465,
  host: 'smtp.gmail.com'
});

const sendEmail = (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `Message from ${name}`,
    text: message + " SENT FROM: " + email
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        status: 'Failed',
        error: err
      });
    } else {
      res.json({
        status: 'Email Sent'
      });
    }
  });
}

module.exports = {
  sendEmail
};