var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Formation = new Schema({
    TitreDeFormation: String,
    NomFormateur:String,
    Description: String,
    NombreDeParticiants: Number,
    DateDebut: String,
    DateFin: String,

    Type :[{ type: Schema.Types.ObjectId, 
        ref: 'type_formation' 
    }]
}
 //{ timestamps: true }
);

var Formation =mongoose.model('formations', Formation);

module.exports = Formation;

