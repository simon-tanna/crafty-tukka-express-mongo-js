const {
	getVenues,
	getVenue,
	removeVenue,
	updateVenue,
} = require("../controllers/venues-controller");
const express = require("express");
const venueRouter = express.Router();

venueRouter.get("/venues", getVenues);
venueRouter.get("/venues/:id", getVenue);
venueRouter.delete("/venues/:id", removeVenue);
venueRouter.put("/venues/:id", updateVenue);

module.exports = venueRouter;
