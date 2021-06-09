var mongoose = require('mongoose');

var User_data = mongoose.Schema({
    "First_name": {
        type: String,
        required: true
    },
    "Last_name": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "Mobile_number": {
        type: String,
        required: true,
        

    },
    "Role": {
        type: String,
        required: true,
        default: "user"
    },
    "Created_at": {
        type: String,
        required: true,
        default: Date.now
    },
    "Is_admin": {
        type: Boolean,
        required: true,
        default: 0
    },
});

module.exports = mongoose.model('user_data',User_data)


var user_security = mongoose.Schema({
    "User_id": {
        type: String,
        required: true
    },
    "Password": {
        type: String,
        required: true
    },
    "Password_hint": {
        type: String,
        required: true
    },
    "Hint_ans": {
        type: String,
        required: true
    },
    "Created_at": {
        type: Date,
        required: true,
        default: Date.now
    },
    "Last_modified": {
        type: Date,
        required: true,
        default: Date.now
    },


});
module.exports = mongoose.model('user_sec',user_security);