const express = require('express');
const path = require('path');
const Swiper = require('swiper');


// init app
const app = express();

// load view engine
app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'pug');
app.use(express.static('views'));

// home route
app.get('/', function(req, res){
  res.render('index');
});

// start server
app.listen(3000, function(){
  console.log('Server started');
});
