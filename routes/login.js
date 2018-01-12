var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
	res.render('pages/login');
});

router.post('/login', passport.authenticate('local-login', {
	successRedirect: '/profile', // redirect to the secure profile section
	failureRedirect: '/login', // redirect back to the signup page if there is an error
	failureFlash: true // allow flash messages
}), (req, res) => {
	console.log("hello");
	if (req.body.remember) {
		req.session.cookie.maxAge = 1000 * 60 * 3;
	} else {
		req.session.cookie.expires = false;
	}
	res.redirect('/');
});

router.post('/signup', (req, res) => {
	res.render('signup.ejs', { message: req.flash('signupMessage') });
});

router.post('/profile', isLoggedIn, (req, res) => {
	res.render('/pages/success');
});

router.get('/logout',(req,res)=>{
	req.logout();
	res.redirect('/');
});

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}


module.exports = router;