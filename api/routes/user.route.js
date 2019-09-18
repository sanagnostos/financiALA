const express = require('express');
const app = express();
const userRoutes = express.Router();

let User = require('../models/user');

userRoutes.route('/add').post(function (req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});
userRoutes.route('/').get(function (req, res) {
    User.find(function (err, users) {
        if(err){
            console.log(err);
        }
        else {
            res.json(users)
        }
    })
})
userRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    User.findById(id, function (err, user){
        res.json(user);
    });
  });
  
  //  Defined update route
  
userRoutes.route('/update/:id').post(function (req, res) {
      User.findById(req.params.id, function(err, user) {
      if (!user)
        return next(new Error('Could not load Document'));
      else {
          user.first_name = req.body.first_name;
          user.last_name = req.body.last_name;
          user.email = req.body.email;
          user.password = req.body.password;
          user.rank = req.body.rank;
        //  user.save = req.body.save;
          user.location = req.body.location
  
          user.save().then(user => {
            res.json('Update complete');
        })
        .catch(err => {
              res.status(400).send("unable to update the database");
        });
      }
    });
  });/*
  userRoutes.route('/update/:id').post(function (req, res) {
    User.findById(req.params.id, function(err, user) {
    if (!user)
      return next(new Error('Could not load Document'));
    else {
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.email = req.body.email;
        user.password = req.body.password;
        user.rank = req.body.rank;
        user.save = req.body.save;
        user.location = req.body.location

        user.save().then(user => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});*/
  userRoutes.route('/updateRank3/:id').post(function(req, res) {
      console.log("updating this")
      User.update({'_id':req.body.id}, {$set: {rank: 3}}, {w:1}, function(err, result) {
          console.log(result);
      });
  });
  userRoutes.route('/promote/:id').post(function(req, res) {
    console.log("updating this")
    User.update({'_id':req.body.id}, {$set: {rank: 2}}, {w:1}, function(err, result) {
        console.log(result);
    });
});

  userRoutes.route('/demote/:id').post(function(req, res) {
    console.log("demoted this")
    User.update({'_id':req.body.id}, {$set: {rank: 1}}, {w:1}, function(err, result) {
        console.log(result);
    });
  });
  userRoutes.route('/savecar/:id&:car').post(function(req, res) {
    console.log("saved this: " + req.body.id)
    User.update({'_id':req.body.id}, {$set: {saved: req.body.car}}, {w:1}, function(err, result) {
        console.log(result);
    });
  });
  // Defined delete | remove | destroy route
  userRoutes.route('/delete/:id').get(function (req, res) {
      User.findByIdAndRemove({_id: req.params.id}, function(err, user){
          if(err) res.json(err);
          else res.json('Successfully removed');
      });
  });
  module.exports = userRoutes;