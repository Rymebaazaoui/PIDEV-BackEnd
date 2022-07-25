var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Type_Velo= new schema({
    Type: String,
});

module.exports = mongoose.model('type_velo', Type_Velo);