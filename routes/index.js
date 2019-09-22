var express = require('express');
var router = express.Router();
var fs = require("fs");
var content = fs.readFileSync("bea.json")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: content });
});

module.exports = router;
