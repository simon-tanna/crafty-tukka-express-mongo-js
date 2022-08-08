const Venue = require("../models/venue");

const getAllVenues = () => Venue.find();

const getVenueById = (id) => Venue.findById(id);

const addVenue = (body) => {
	return Venue(body);
};

module.exports = { getAllVenues, getVenueById, addVenue };
