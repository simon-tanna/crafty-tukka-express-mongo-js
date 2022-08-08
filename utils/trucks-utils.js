const Truck = require("../models/truck");

const getAllTrucks = () => Truck.find();

const getTruckById = (id) => Truck.findById(id);

const addTruck = (body) => {
	return Truck(body);
};

const deleteTruck = (id) => Truck.findByIdAndRemove(id);

const amendTruck = (id, body) => {
	return Truck.findByIdAndUpdate(id, body, { new: true });
};

module.exports = {
	getAllTrucks,
	getTruckById,
	addTruck,
	deleteTruck,
	amendTruck,
};
