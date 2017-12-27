var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var sassMiddleware = require('node-sass-middleware')

var nunjacks = require('nunjucks');

var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
nunjacks.configure(path.join(__dirname, 'views'), {
	autoescape: true,
	express: app,
	watch: true
});
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(sassMiddleware({
	/* Options */
	src: path.join(__dirname, 'sass'),
	dest: path.join(__dirname, 'public/stylesheets'),
	debug: true,
	outputStyle: 'compressed',
	prefix: '/styles'
}));

app.use(express.static(path.join(__dirname, 'public')));



app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}));

app.use(function(req, res, next) {
	if(!req.session.user){
		if(req.url=="/login"){
			next();
		}else{
			res.redirect('/login');
		}
	} else if(req.session.user){
		next();
	}
});

app.use('/', index);
app.use('/users', users);
app.use('/login', login);

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