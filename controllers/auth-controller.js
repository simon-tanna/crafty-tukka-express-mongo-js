const Venue = require("../models/venue");

const signUpVenue = (req, res) => {
	const newVenue = new Venue(req.body);

	newVenue.save((err, venue) => {
		if (err) {
			res.status(500);
			return res.json({ error: err.message });
		} else {
			res.status(201);
			res.send(venue);
		}
	});
};

module.exports = { signUpVenue };
