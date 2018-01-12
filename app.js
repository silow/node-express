var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var sassMiddleware = require('node-sass-middleware');
var nunjacks = require('nunjucks');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash    = require('connect-flash');

var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configuration ===============================================================
// connect to our database
require('./src/conf/passport')(passport); // pass passport for configuration

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
nunjacks.configure(path.join(__dirname, 'views'), {
	autoescape: true,
	express: app,
	trimBlocks: true,
	lstripBlocks: true,
	watch: true
});
app.set('view engine', 'html');


//set express-session
app.use(require('express-session')({
	secret: 'silow lee Ly',
	resave: false,
	saveUninitialized: false
}));

//init passport
app.use(passport.initialize());
app.use(passport.session());

//init sass middleware
app.use(sassMiddleware({
	sourceMap: true,
	src: path.join(__dirname, 'src/sass'),
	dest: path.join(__dirname, 'assets/css'),
	debug: true,
	outputStyle: 'compressed',
	prefix: '/css'
}));

app.use(express.static(path.join(__dirname, 'assets')));

// set flash
app.use(flash());

app.use('/', index);
app.use('/login', login);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
