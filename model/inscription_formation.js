var mongoose = require('mongoose');
var schema = mongoose.Schema;

var InscriptionFormation= new schema({
    Nom : String,
    Prenom : String,
    Mail : String,
    Formation :[{ type: schema.Types.ObjectId, 
            ref: 'Formations' 
            
        }]

});

var inscription_formation =mongoose.model('Inscription_formation', InscriptionFormation);

module.exports = inscription_formation;