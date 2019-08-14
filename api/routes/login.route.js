const express = require('express');
const app = express();
const loginRoute = express.Router();


let User = require('../models/user');

loginRoute.route('/LogIn').post(function (req, res) {
    User.findOne({
        email: req.body.email,
        password: req.body.password
    }, function (err, doc){
        console.log(doc)
        if(doc != null) {
            req.session.user = doc;
            res.status(200).json({
                "status": true})
        } else {
            res.status(401).json({
                "status": false})
            res.end();
        }

    });
    
});


module.exports = loginRoute;