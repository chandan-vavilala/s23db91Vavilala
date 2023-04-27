var express = require('express');
flight_controlers= require('../controllers/Flight');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
     return next();
     }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

/* GET costumes */
router.get('/', flight_controlers.flight_view_all_Page );

/* GET detail costume page */
router.get('/detail', flight_controlers.flight_view_one_Page);

/* GET create costume page */
router.get('/create',secured,flight_controlers.flight_create_Page);

/* GET create update page */
router.get('/update',secured, flight_controlers.flight_update_Page);

/* GET delete costume page */
router.get('/delete',secured, flight_controlers.flight_delete_Page);


module.exports = router;
