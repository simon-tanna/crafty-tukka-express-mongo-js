const { getAllVenues } = require("../utils/venues-utils");

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

module.exports = { getVenues };
