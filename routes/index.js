var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/route', function(req, res, next) {
  console.log("yo");
  //res.render('index', { title: 'Express' });
});

module.exports = router;
