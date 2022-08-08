const { getAllTrucks } = require("../utils/trucks-utils");

const getTrucks = (req, res) => {
	getAllTrucks().exec((err, trucks) => {
		if (err) {
			res.status(500);
			return res.json({ error: err.message });
		} else {
			res.status(200);
			res.send(trucks);
		}
	});
};

module.exports = { getTrucks };
