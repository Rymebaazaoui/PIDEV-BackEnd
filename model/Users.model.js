var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = new Schema({
   nom: String,
   prenom:String,
   date_naissance: String,
   email: String,
   mdp: String,
   role : String
}

);
var user =mongoose.model('Users', User);

module.exports = user;
