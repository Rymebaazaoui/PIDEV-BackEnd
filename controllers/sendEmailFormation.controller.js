const nodemailer = require('nodemailer');
      let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "49dc8a0aa2ba51",
      pass: "520521cc4f7328"
    }
  })
  message = {
    from: "from@email.com",
    to: "to@email.com",
    subject: "Subject",
    text: "Votre inscription à la formarion est confirmée!"
}
transporter.sendMail(message, function (error, response) {
    if (error) {
     console.log(error);
    } else {
     console.log('Message sent: ok');
    }
    transporter.close(); 
   });