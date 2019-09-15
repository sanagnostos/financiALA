var nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const emailRoutes = express.Router();

var transporter =
nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'financiala1121@gmail.com',
        pass:'WeAreTheBest123'
    }
});
var mailOptions = {
    from : 'financiala1121@gmail.com',
    to: 'aguiredaniel120@gmail.com',
    subject: 'Sending a test email using Node.js',
    text: 'Whats good Hoomie!'
}

emailRoutes.route('/send').post(function (req, res) {
    mailOptions.to = req.body.email
    console.log(mailOptions)
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
        res.end()
      });
})

module.exports = emailRoutes;


