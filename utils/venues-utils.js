const Venue = require("../models/venue");

const getAllVenues = () => Venue.find();

const getVenueById = (id) => Venue.findById(id);

// const addVenue = (body) => {
// 	return new Venue(body);
// };

const deleteVenue = (id) => Venue.findByIdAndRemove(id);

const amendVenue = (id, body) => {
	return Venue.findByIdAndUpdate(id, body, { new: true });
};

module.exports = { getAllVenues, getVenueById, deleteVenue, amendVenue };
