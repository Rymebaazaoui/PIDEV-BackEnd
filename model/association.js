var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Association= new schema({
    Description: String,
});

var association =mongoose.model('Association', Association);

module.exports = association;