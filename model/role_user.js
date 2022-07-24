var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Role_User= new schema({
    Role: String,
});

var Role =mongoose.model('role_user', Role_User);

module.exports = Role;