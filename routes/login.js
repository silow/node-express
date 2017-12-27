var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('pages/login/login');
});

router.post('/',function(req,res){
    
});

module.exports = router;