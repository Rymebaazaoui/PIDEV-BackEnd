var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Formation = new Schema({
    TitreDeFormation: String,
    NomFormateur:String,
    Description: String,
    NombreDeParticiants: Number,
    DateDebut: Date,
    DateFin: Date,

    Type :[{ type: Schema.Types.ObjectId, 
        ref: 'type_formation.model' 
    }]
}
 //{ timestamps: true }
);

module.exports = mongoose.model('formations', Formation);

