var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Flight', { title: 'Search Results Flight' });
});

module.exports = router;
