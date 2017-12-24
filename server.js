// function isUserAuthenticated(req, res, next) {
//     var bearerToken;
//     var bearerHeader = req.headers["authorization"];
//     if (typeof bearerHeader !== 'undefined') {
//         var bearer = bearerHeader.split(" ");
//         bearerToken = bearer[1];
//         req.token = bearerToken;
//         next();
//     } else {
//         res.send(403);
//     }
// }
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var validator = require('express-validator');

var cors=require('cors');
var users = require('./routes/users');
var countries = require('./routes/countries');
var app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(validator());

// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST', 'PUT', 'DELETE', 'OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
//     next();
// });
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);
app.use('/countries', countries);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.listen(3000, () => console.log("App listen to port 3000"));
