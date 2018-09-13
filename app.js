const express = require('express');
const path = require('path');
const multer = require('multer');
const pug = require('pug');
const port = 5000;
const router = express.Router();
const mongoose = require('mongoose');
// const User = require('../lib/User')

// init app -----------------------------------------------------------------
const app = express();

// load view engine -----------------------------------------------------------------
app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'pug');
app.use(express.static('views'));

// home route -----------------------------------------------------------------
app.get('/', function(req, res){
  res.render('index');
});

// start server -----------------------------------------------------------------
app.listen(port, function(){
  console.log('Server started');
});

// Server status -----------------------------------------------------------------
router.get('/healthcheck', function(req, resp){
  var responseString = 'OK';
  res.send(responseString);
})

// User schema -----------------------------------------------------------------
var userSchema = new mongoose.Schema({
  username: {type: String, unique: true},
  password: {type: String},
  firstname: String,
  lastname: String
});

var User = mongoose.model('myuser', userSchema)
module.exports = User;

// User authentication -----------------------------------------------------------------
router.post('/login', function(req, res){
  var username = req.body.username;
  var password = req.body.password;

  User.findeOne({username: username, password: password}, function(err, user) {
    if(err) {
      console.log(err);
      return res.status(500).send();
    }
    if(!user) {
      return res.status(404).send();
    }
    
    return res.status(200).send();
  })
})

// User Registration -----------------------------------------------------------------
router.post('/register', function(req, res) {
  var username = re.body.username;
  var password = req.body.password;
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;

  var newuser = new User();
  newuser.username = username;
  newuser.password = password;
  newuser.firstname = firstname;
  newuser.lastname = lastname;
  newuser.save(function(err, savedUser) {
    if(err) {
      console.log(err);
      return res.status(500).send();
    }
  })
})

module.exports = router;

// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');

// const multer = require('multer');
// const pug = require('pug');
// const flash = require('connect-flash');
// const session = require('express-session');
// const passport = require('passport');
// const config = require('./config/database');
// const port = 3000;
// const router = express.Router();
// const mongoose = require('mongoose');


// mongoose.connect(config.database);
// let db = mongoose.connection;


// // Check connection -----------------------------------------------------------------
// db.once('open', function(){
//   console.log('Connected to MongoDB');
// });


// // Check for DB errors -----------------------------------------------------------------
// db.on('error', function(err){
//   console.log(err);
// });


// // init app -----------------------------------------------------------------
// const app = express();


// // Bring in Models -----------------------------------------------------------------
// // let Article = require('./models/article');


// // load view engine -----------------------------------------------------------------
// app.set('public', path.join(__dirname, 'public'));
// app.set('view engine', 'pug');
// app.use(express.static('views'));


// // Body Parser Middleware
// // parse application/x-www-form-urlencoded -----------------------------------------------------------------
// app.use(bodyParser.urlencoded({ extended: false }));
// // parse application/json
// app.use(bodyParser.json());


// // Set Public Folder -----------------------------------------------------------------
// app.use(express.static(path.join(__dirname, 'public')));


// // Express Session Middleware -----------------------------------------------------------------
// // app.use(session({
// //   secret: 'keyboard cat',
// //   resave: true,
// //   saveUninitialized: true
// // }));


// // Express Messages Middleware -----------------------------------------------------------------
// app.use(require('connect-flash')());
// app.use(function (req, res, next) {
//   res.locals.messages = require('express-messages')(req, res);
//   next();
// });





// // Passport Config-----------------------------------------------------------------
// require('./config/passport')(passport);


// // Passport Middleware -----------------------------------------------------------------
// app.use(passport.initialize());
// app.use(passport.session());


// app.get('*', function(req, res, next){
//   res.locals.user = req.user || null;
//   next();
// });


// // home route -----------------------------------------------------------------
// app.get('/', function(req, res){
//   res.render('index');
// });


// // Route Files -----------------------------------------------------------------
// let users = require('./routes/users');
// app.use('/users', users);


// // start server -----------------------------------------------------------------
// app.listen(port, function(){
//   console.log('Server started');
// });

// module.exports = router;