const {
	getAllTrucks,
	getTruckById,
	addTruck,
	deleteTruck,
	amendTruck,
} = require("../utils/trucks-utils");

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

const getTruck = (req, res) => {
	getTruckById(req.params.id).exec((err, truck) => {
		if (err) {
			res.status(404);
			return res.json({ error: "Truck not found. Invalid Path" });
		} else {
			res.status(200);
			res.send(truck);
		}
	});
};

const createTruck = (req, res) => {
	addTruck(req.body).save((err, truck) => {
		if (err) {
			res.status(500);
			return res.json({ error: err.message });
		} else {
			res.status(201);
			res.send(truck);
		}
	});
};

const removeTruck = (req, res) => {
	deleteTruck(req.params.id).exec((err) => {
		if (err) {
			res.status(404);
			return res.json({ error: err.message });
		} else {
			res.status(200);
			return res.json({ success: "Truck Removed" });
		}
	});
};

const updateTruck = (req, res) => {
	amendTruck(req.params.id, req.body).exec((err, truck) => {
		if (err) {
			res.status(404);
			return res.json({ error: err.message });
		} else {
			res.status(200);
			res.send(truck);
		}
	});
};

module.exports = { getTrucks, getTruck, createTruck, removeTruck, updateTruck };
