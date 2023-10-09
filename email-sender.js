// Importez le module email-sender
var nodemailer = require('nodemailer');
// Configuration du transporteur de messagerie
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yourmail@gmail.com',
    pass: '*******'
  }
});
// Options de l'e-mail
var mailOptions = {
  from: 'yourmail@gmail.com',
  to: 'exmal@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
// Envoyer l'e-mail
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});