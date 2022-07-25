var mongoose = require('mongoose');
var schema = mongoose.Schema;

var InscriptionAssociation= new schema({
    Nom : String,
    Prenom : String,
    Mail : String,
    Association :[{ type: schema.Types.ObjectId,
        ref: 'Associations'

    }]

});

var inscription_Association =mongoose.model('Inscription_Association', InscriptionAssociation);

module.exports = inscription_Association;