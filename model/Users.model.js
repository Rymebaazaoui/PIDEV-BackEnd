var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = new Schema({
   nom: String,
    prenom:String,
    date_naissance: Date,
    email: String,
   mdp: String,
   Role :String,
}

);
var user =mongoose.model('Users', User);

module.exports = user;
