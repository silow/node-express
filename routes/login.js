var express = require('express');
var router = express.Router();
var dao = require('../dao/login/loginDao');

/* GET users listing. */
router.get('/', function (req, res) {
	if(req.session.user){
		res.redirect('/');
	}else{
		res.render('pages/login');
	}
});

router.post('/signin', function (req, res, next) {
	dao.login(req, res, function(res,status){
		if(status){
			res.redirect('/');
		}else{
			res.redirect('pages/login');
		}
	});
});

router.post('/logout',function(req,res,next){
	delete req.session.user
	res.redirect('/');
});

module.exports = router;