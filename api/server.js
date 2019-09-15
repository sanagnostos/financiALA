
const express = require('express');
path = require('path');
bodyParser = require('body-parser');
cors = require('cors'),
mongoose = require('mongoose');
config = require('./DB');
const session = require('express-session')
const userRoute = require('./routes/user.route')
const carRoute = require('./routes/car.route')
const loginRoute = require('./routes/login.route')
const dealerRoute = require('./routes/dealer.route')
const emailRoute = require('./routes/email.route')
const fs = require('fs');
const multer = require('multer');
const router = express.Router();
const DIR = '../src/assets/images'

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(session({
  secret: 'keyboard cat',
 resave: false,
 saveUninitialized: true,
 cookie: { secure: true }
}))
app.use(bodyParser.json());
app.use(cors());
app.use('/user', userRoute);
app.use('/car', carRoute);
app.use('/login', loginRoute);
app.use('/dealer', dealerRoute);
app.use('/email', emailRoute);

//IMAGE START

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
let upload = multer({storage: storage})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.get('/api', function (req, res) {
  res.end('file catcher example');
});

app.post('/api/upload',upload.single('photo'), function (req, res) {
  if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false
      });
  
    } else {
      console.log('file received');
      return res.send({
        success: true
      })
    }
});
const port = process.env.PORT || 4000;


const server = app.listen(port, function(){
 console.log('Listening on port ' + port);
});
