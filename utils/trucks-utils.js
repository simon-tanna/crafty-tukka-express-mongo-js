const Truck = require("../models/truck");

const getAllTrucks = () => Truck.find();

module.exports = { getAllTrucks };
