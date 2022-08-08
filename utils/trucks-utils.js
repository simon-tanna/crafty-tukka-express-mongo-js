const Truck = require("../models/truck");

const getAllTrucks = () => Truck.find();

const getTruckById = (id) => Truck.findById(id);

const addTruck = (body) => {
	return Truck(body);
};

module.exports = { getAllTrucks, getTruckById, addTruck };
