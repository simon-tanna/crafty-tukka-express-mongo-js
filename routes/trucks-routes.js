const {
	getTrucks,
	getTruck,
	createTruck,
} = require("../controllers/trucks-controller");
const express = require("express");
const truckRouter = express.Router();

truckRouter.get("/trucks", getTrucks);
truckRouter.get("/trucks/:id", getTruck);
truckRouter.post("/trucks", createTruck);

module.exports = truckRouter;
