const nodemailer = require('nodemailer');
      let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d23597df5ed782",
      pass: "daa20617b1cb2f"
    }
  })
  message = {
    from: "from@email.com",
    to: "to@email.com",
    subject: "Subject",
    text: "Votre reservation est confirmée!"
}
transporter.sendMail(message, function (error, response) {
    if (error) {
     console.log(error);
    } else {
     console.log('Message sent: ok');
    }
    transporter.close(); 
   });


/*
   const nodemailer = require ("nodemailer")
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,

auth: {
    user:"ichrak.baghouli@esprit.tn",
    pass:"201SFT2781"
},
tls: {
    rejectUnauthorized: false,
}

});

let mailOption ={
    from: "ichrak.baghouli@esprit.tn",
    to:"samar.daghari@esprit.tn",
    subject:"Reservation velo",
    text:"Votre reservation est confirmée!l"
}
transporter.sendMail(mailOption, function(err, succuess){
    if(err){
        console.log(err)
    } else {
        console.log("Message sent")
    }
})
*/