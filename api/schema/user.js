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
        type: Number,
        required: true,
        maxlength: 10,
        minlength:10

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