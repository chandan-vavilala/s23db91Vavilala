var express = require('express');
flight_controlers= require('../controllers/Flight');
var router = express.Router();
/* GET costumes */
router.get('/', flight_controlers.flight_view_all_Page );
module.exports = router;