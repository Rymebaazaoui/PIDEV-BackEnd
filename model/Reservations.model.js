var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Reservation= new schema({
    Nom : String,
    Prenom : String,
    Mail : String,
    DateDeb: Date ,
    DateFin: Date,
    /*client:{Type:mongoose.Schema.Types.ObjectId,ref:'User'},*/
  /* velos:{
        Type: mongoose.Types.ObjectId,
        ref:'Velo'},

*/
Velo :[{ type: schema.Types.ObjectId, 
    ref: 'Velos' 
}]

});
var reservation =mongoose.model('Reservations', Reservation);

module.exports = reservation;  