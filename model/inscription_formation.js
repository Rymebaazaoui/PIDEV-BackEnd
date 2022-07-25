var mongoose = require('mongoose');
var schema = mongoose.Schema;

var InscriptionFormation= new schema({
    nom : String,
    prenom : String,
    mail : String,
    Formation :[{ type: schema.Types.ObjectId, 
            ref: 'Formations' 
            
        }]

});

var inscription_formation =mongoose.model('Inscription_formation', InscriptionFormation);

module.exports = inscription_formation;