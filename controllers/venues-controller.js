const {
	getAllVenues,
	getVenueById,
	addVenue,
} = require("../utils/venues-utils");

const getVenues = (req, res) => {
	getAllVenues().exec((err, venues) => {
		if (err) {
			res.status(500);
			return res.json({ error: err.message });
		} else {
			res.status(200);
			res.send(venues);
		}
	});
};

const getVenue = (req, res) => {
	getVenueById(req.params.id).exec((err, venue) => {
		if (err) {
			res.status(404);
			return res.json({ error: "Venue not found, invalid id path" });
		} else {
			res.status(200);
			res.send(venue);
		}
	});
};

const createVenue = (req, res) => {
	addVenue(req.body).save((err, venue) => {
		if (err) {
			res.status(500);
			return res.json({ error: err.message });
		} else {
			res.status(201);
			res.send(venue);
		}
	});
};

module.exports = { getVenues, getVenue, createVenue };
