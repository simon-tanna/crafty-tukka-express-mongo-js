const {
	getVenues,
	getVenue,
	createVenue,
} = require("../controllers/venues-controller");
const express = require("express");
const venueRouter = express.Router();

venueRouter.get("/venues", getVenues);
venueRouter.get("/venues/:id", getVenue);
venueRouter.post("/venues", createVenue);

module.exports = venueRouter;
