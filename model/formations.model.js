var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Formation = new Schema({
    TitreDeFormation: String,
    NomFormateur:String,
    Description: String,
    NombreDeParticiants: Number,
    DateDebut: Date,
    DateFin: Date
}
 //{ timestamps: true }
);

module.exports = mongoose.model('formations', Formation);