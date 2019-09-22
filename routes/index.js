var express = require('express');
var router = express.Router();
var fs = require('fs')

router.use(express.static('routes'))

/* GET home page. */
router.get('/', function(req, res, next) {
  var config = require('bea.json');
  res.render('index', { config});
});

module.exports = router;
