
const nodemailer = require("nodemailer");

const { createTransporter } = require("../Transpoter/Transpoter");

// Unified email sender
const sendEmail = async ({ to, subject, html }) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: '"My App" <britney36@ethereal.email>', // hardcoded sender
      to,
      subject,
      html
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    console.log("Preview URL:", nodemailer.getTestMessageUrl(info));

    return { success: true, preview: nodemailer.getTestMessageUrl(info) };
  } catch (err) {
    console.error("Error sending email:", err);
    return { success: false, error: err };
  }
};

module.exports = { sendEmail };