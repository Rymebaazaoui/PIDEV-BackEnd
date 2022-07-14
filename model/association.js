var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Association= new schema({
    Description: String,
    Nb_participant : Number,
    Type :[{ type: schema.Types.ObjectId,
        ref: 'Type_association'
    }]
});

var association =mongoose.model('Association', Association);

module.exports = association;