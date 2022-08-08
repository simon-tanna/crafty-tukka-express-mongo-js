const Venue = require("../models/venue");

const getAllVenues = () => Venue.find();

module.exports = { getAllVenues };
