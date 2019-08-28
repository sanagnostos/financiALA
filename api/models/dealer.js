const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Dealer = new Schema({
    name: {
        type: String
    }, 
    location: {
        type: String
    },
    manager: {
        type: String
    }
},{
    collection: 'dealer'
});

module.exports = mongoose.model('Dealer', Dealer)