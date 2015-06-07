// connect to mongodb in this module as this is where you'll be making creat/read/delete calls to your database
// use 'mongodb://localhost/foodTruckAPI' for your mongoose connection string
// remember this is a Node module
var express = require('express');
var mongoose = require('mongoose');
var Truck = require('../models/truckModel');

var router = express.Router();

router.route('/')
	.get(function(request, response) {
		Truck.find(function(error, trucks) {
			if(error) {
				response.status(500).send(error);
			} else {
				response.send(trucks);
			}
		});
	});

router.route('/:id')
	.get(function(request, response) {
		var id = request.params.id;
		Truck.findById(id, function(error, truck) {
				response.status(500).send(error);
			if (error) {
			} else {
				response.send(truck);
			}
		});
	});

module.exports = router;
