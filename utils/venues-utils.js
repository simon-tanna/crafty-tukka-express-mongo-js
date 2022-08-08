const Venue = require("../models.venue.js");

const getAllVenues = () => Venue.find();

module.exports = { getAllVenues };
