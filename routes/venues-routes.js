const {
	getVenues,
	getVenue,
	createVenue,
	removeVenue,
	updateVenue,
} = require("../controllers/venues-controller");
const express = require("express");
const venueRouter = express.Router();

venueRouter.get("/venues", getVenues);
venueRouter.get("/venues/:id", getVenue);
venueRouter.post("/venues", createVenue);
venueRouter.delete("/venues/:id", removeVenue);
venueRouter.put("/venues/:id", updateVenue);

module.exports = venueRouter;
