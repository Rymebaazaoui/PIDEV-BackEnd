const nodemailer = require ("nodemailer")
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,

auth: {
    user:"rym.baazaoui@esprit.tn",
    pass:"202SFT4426"
},
tls: {
    rejectUnauthorized: false,
}

});

let mailOption ={
    from: "rym.baazaoui@esprit.tn",
    to:"samar.daghari@esprit.tn",
    subject:"Inscription Formation",
    text:"Votre inscription à la formarion est confirmée!l"
}
transporter.sendMail(mailOption, function(err, succuess){
    if(err){
        console.log(err)
    } else {
        console.log("Message sent")
    }
})