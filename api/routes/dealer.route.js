const express = require('express');
const app = express();
const dealerRoute = express.Router();

let Dealer = require('../models/dealer');

dealerRoute.route('/add').post(function (req, res) {
    let dealer = new Dealer(req.body);
    dealer.save()
        .then(dealer => {
            res.status(200).json({'dealer': 'dealer in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});
dealerRoute.route('/').get(function (req, res) {
    Dealer.find(function (err, dealers) {
        if(err){
            console.log(err);
        }
        else {
            res.json(dealers)
        }
    })
})
dealerRoute.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Dealer.findById(id, function (err, dealer){
        res.json(dealer);
    });
  });
  
  //  Defined update route
  dealerRoute.route('/update/:id').post(function (req, res) {
    Dealer.findById(req.params.id, function(err, next, dealer) {
      if (!dealer)
        return next(new Error('Could not load Document'));
      else {
        dealer.name = req.body.name;
        dealer.location = req.body.location;
        dealer.manager = req.body.manager;

  
        dealer.save().then(dealer => {
            res.json('Update complete');
        })
        .catch(err => {
              res.status(400).send("unable to update the database");
        });
      }
    });
  });
  
  // Defined delete | remove | destroy route
  dealerRoute.route('/delete/:id').get(function (req, res) {
    Dealer.findByIdAndRemove({_id: req.params.id}, function(err, dealer){
          if(err) res.json(err);
          else res.json('Successfully removed');
      });
  });
  
  module.exports = dealerRoute;