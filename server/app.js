var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var {connection_database} = require("./database/mongoose")
const { auth } = require('express-openid-connect');
require("dotenv").config();

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: 'http://localhost:3000',
  clientID: 'SQYQpcO11fF5gAIW3U8tzF1DqmD7tfbU',
  issuerBaseURL: 'https://auth-test-app.uk.auth0.com',
  secret: process.env.secret
};

var app = express();

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(auth(config));
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
});

app.get('/log', cors(), (req, res) => {
  res.redirect('login')
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articleRoutes = require('./routes/articleRoutes');
var libraryRoutes = require('./routes/libraryRoutes');
var resourcesRoutes = require('./routes/resourcesRoutes');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// connection to the database
connection_database().catch(err => console.log(err));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/articles', articleRoutes);
app.use('/', resourcesRoutes);
app.use('/', libraryRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
