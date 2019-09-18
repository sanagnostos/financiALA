const express = require('express');
const app = express();
const carRoutes = express.Router();

let Car = require('../models/car');

carRoutes.route('/add').post(function (req, res) {
    let car = new Car(req.body);
    car.save()
        .then(car => {
            res.status(200).json({'car': 'car in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});
carRoutes.route('/').get(function (req, res) {
    Car.find(function (err, cars) {
        if(err){
            console.log(err);
        }
        else {
            res.json(cars)
        }
    })
})
carRoutes.route('/get/:id').get(function (req, res) {
    Car.find( { $where: function () {
        console.log(cars.dealer)
        return(hex_md5(cars.dealer) == req.params.id)
     //   res.json(cars.dealer)
    }})});

/*
db.players.find( { $where: function() {
   return (hex_md5(this.name) == "9b53e667f30cd329dca1ec9e6a83e994")
} } );

*/
carRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Car.findById(id, function (err, car){
        res.json(car);
    });
  });
  
  //  Defined update route
  carRoutes.route('/update/:id').post(function (req, res) {
      Car.findById(req.params.id, function(err, car) {
      if (!car)
        return next(new Error('Could not load Document'));
      else {
        car.make = req.body.make;
        car.model = req.body.model;
        car.year = req.body.year;
        car.price = req.body.price;
        car.dealer = req.body.dealer;
  
          car.save().then(car => {
            res.json('Update complete');
        })
        .catch(err => {
              res.status(400).send("unable to update the database");
        });
      }
    });
  });
  
  // Defined delete | remove | destroy route
  carRoutes.route('/delete/:id').get(function (req, res) {
      Car.remove({_id: req.params.id}, function(err, car){
          if(err) res.json(err);
          else res.json('Successfully removed');
      });
  });
  
  module.exports = carRoutes;