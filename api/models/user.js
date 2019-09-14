const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    rank: {
        type: Number
    },
    location: {
        type: String
    }
},{
    collection: 'users'
});

module.exports = mongoose.model('User', User)