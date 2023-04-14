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
exports.flight_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Flight();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Model = req.body.Model;
    document.cost = req.body.cost;
    document.capacity = req.body.capacity;
    document.range = req.body.range;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    }
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