var express = require('express');
flight_controlers= require('../controllers/Flight');
var router = express.Router();
/* GET costumes */
router.get('/', flight_controlers.flight_view_all_Page );


/* GET detail costume page */
router.get('/detail', flight_controlers.flight_view_one_Page);

/* GET create costume page */
router.get('/create', flight_controlers.flight_create_Page);

module.exports = router;
