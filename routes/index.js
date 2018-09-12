const express = require('express');
// const User = require('../lib/User')
const router = express.Router();
const mongoose = reqire('mongoose');

mongoose.connect('mongodb://localhost/test')

// init app
const app = express();


// home route
app.get('/', function(req, res){
  res.render('index');
});

// Server status
router.get('/healthcheck', function(req, resp){
  var responseObject = {message: 'OK'};
  res.send(responseObject);
})

// User authentication
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

// User registration
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