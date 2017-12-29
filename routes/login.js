var express = require('express');
var router = express.Router();
var dao = require('../dao/login/loginDao');

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('pages/login');
});
router.get('/signin',function(req,res){
    req.session.user="helloworld";
    console.log('save session');
    res.render('index');
});


module.exports = router;