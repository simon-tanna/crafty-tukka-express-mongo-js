const { getVenues } = require("../controllers/venues-controller");
const express = require("express");
const venueRouter = express.Router();

venueRouter.get("/venues", getVenues);

module.exports = venueRouter;
