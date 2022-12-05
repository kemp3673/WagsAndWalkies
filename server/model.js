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
  console.log(req.body);
  const { firstName, lastName, phone, email, message } = req.body;
  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `New Client Inquiry from ${firstName} ${lastName}`,
    text: `${message} \n \n Sent from ${firstName} ${lastName} \n Phone: ${phone} \n Email: ${email}`
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