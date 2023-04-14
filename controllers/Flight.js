var Flight = require('../models/Flight');
// List of all Flights
exports.flight_list = async function(req, res) {
    try{
    theFlight = await Flight.find();
    res.send(theFlight);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific Flight.
exports.flight_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Flight detail: ' + req.params.id);
};
// Handle Flight create on POST.
exports.flight_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Flight create POST');
};
// Handle Flight delete form on DELETE.
exports.flight_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Flight delete DELETE ' + req.params.id);
};
// Handle Flight update form on PUT.
exports.flight_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Flight update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.flight_view_all_Page = async function(req, res) {
    try{
    theFlight = await Flight.find();
    res.render('Flight', { title: 'Flight Search Results', results: theFlight });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    }