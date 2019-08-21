const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Car = new Schema({
    make: {
        type: String
    },
    model: {
        type: String
    },
    year: {
        type: String
    },
    dealer: {
        type: String
    },
    price: {
        type: Number
    }
},{
    collection: 'cars'
});

module.exports = mongoose.model('Car', Car)