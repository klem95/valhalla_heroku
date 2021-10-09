var express = require('express');
var router = express.Router();
const https = require('https');
const request = require('request');
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("Trying to acess valhalla");
  request('https://127.0.0.1:8002/', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.explanation);
  res.send(body.explanation);

});
  
});

module.exports = router;


