const nodemailer = require("nodemailer");

// Create transporter directly (hardcoded)
const createTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "britney36@ethereal.email", // hardcoded Ethereal email
      pass: "Z96MRsJaup5k5VNu59"       // hardcoded password
    }
  });
};

module.exports = { createTransporter };