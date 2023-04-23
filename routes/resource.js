var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var flight_controller = require('../controllers/Flight');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// FLIGHTS ROUTES ///
// POST request for creating a Flight.
router.post('/Flight', flight_controller.flight_create_post);
// DELETE request to delete Flight.
router.delete('/Flight/:id', flight_controller.Flight_delete);
// PUT request to update Flight.
router.put('/Flight/:id', flight_controller.Flight_update_put);
// GET request for one Flight.
router.get('/Flight/:id', flight_controller.flight_detail);
// GET request for list of all Flight items.
router.get('/Flight', flight_controller.flight_list);


module.exports = router;     
