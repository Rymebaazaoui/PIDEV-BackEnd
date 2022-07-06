var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
let mailTransporter = nodemailer.createTransport({
  service:"gmail",
  auth:{
    user:"marwa.jellali@esprit.tn",
    pass:"14240122"
  }
})
let details ={
  from :"marwa.jellali@esprit.tn",
  to :"eya.hadrich@esprit.tn",
  subject :"visite",
  text:"votre visite est confirmé ",
}
mailTransporter.sendMail(details,(err)=>{
  if (err){
    console.log(" it has an error",err)

  }
  else {
    console.log("email has sent !")
  }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
