/* eslint-disable */
const nodemailer = require("nodemailer");
const functions = require("firebase-functions");

const config = functions.config();
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.user.email,
    password: config.user.password,
  },
});

let mailOptions = {
  from: "viet.dang@dirox.net",
};

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const { name, email, phone, message } = request.query;

    mailOptions = { from: "viet.dang@dirox.net" ,to: "vietdanghuy.95@gmail.com", html:`
      <p style="font-size: 16px">From: ${name}</p>
      <p style="font-size: 16px">Email: ${email}</wp>
      <p style="font-size: 16px">Phone Number: ${phone}</p>
      <p style="font-size: 16px">Message: ${message}</p>`
    
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message sent successfully");
      }
    });
    mailOptions = { from: "viet.dang@dirox.net", to: email, subject: 'We have received your message', html: 'hello'}
  });
});
