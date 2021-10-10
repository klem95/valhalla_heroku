var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/route', function(req, res, next) {
  var url_parts = url.parse(req.url);
  console.log(url_parts);
  console.log(url_parts.pathname);
  //res.render('index', { title: 'Express' });
});

module.exports = router;
