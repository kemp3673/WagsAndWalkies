// const axios = require('axios');
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

// Sends email to myself with client info
const sendEmail = (req, res) => {
  // Creates transporter for nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      // Conditional to be used for testing
      user: req.body.user || process.env.EMAIL,
      pass: req.body.password || process.env.PASSWORD,
    },
    port: 465,
    host: "smtp.gmail.com",
  });

  const { firstName, lastName, phone, email, message, type } = req.body;
  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `${type} from ${firstName} ${lastName}`,
    text: `${message} \n \n Sent from ${firstName} ${lastName} \n Phone: ${phone} \n Email: ${email}`,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: "Email failed to send",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "Email Sent",
      });
    }
  });
};

module.exports = {
  sendEmail,
};
