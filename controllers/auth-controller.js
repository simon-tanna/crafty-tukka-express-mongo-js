const Venue = require("../models/venue");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//environment variables
require("dotenv").config();

const signUpVenue = (req, res) => {
	const newVenue = new Venue(req.body);
	const secret = process.env.SECRET_STRING;
	newVenue.hash_password = bcrypt.hashSync(req.body.password, 10);
	// if (req.body.password === req.body.password_confirmation)
	newVenue.save((err, venue) => {
		if (err) {
			res.status(500);
			return res.json({ error: err.message });
		} else {
			res.status(201);
			const token = jwt.sign(
				{ username: venue.name, email: venue.email, _id: venue._id },
				`${secret}`
			);
			// res.send(venue.name);
			return res.json({ name: venue.name, email: venue.email, jwt: token });
		}
	});
};

module.exports = { signUpVenue };
