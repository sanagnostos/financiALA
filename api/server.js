
const express = require('express');
path = require('path');
bodyParser = require('body-parser');
cors = require('cors'),
mongoose = require('mongoose');
config = require('./DB');
const multer = require('multer');
const session = require('express-session')
const userRoute = require('./routes/user.route')
const carRoute = require('./routes/car.route')
const loginRoute = require('./routes/login.route')
const dealerRoute = require('./routes/dealer.route')
const emailRoute = require('./routes/email.route')
const upload = multer({dest: __dirname + '/images'})

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
app.post('/file-upload', upload.single('photo'), (req, res) => {
 if(req.file) {
   res.json(req.file);
 }
 else throw 'error';
});


const port = process.env.PORT || 4000;


const server = app.listen(port, function(){
 console.log('Listening on port ' + port);
});
