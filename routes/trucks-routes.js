const {
	getTrucks,
	getTruck,
	createTruck,
	removeTruck,
	updateTruck,
} = require("../controllers/trucks-controller");
const express = require("express");
const truckRouter = express.Router();

truckRouter.get("/trucks", getTrucks);
truckRouter.get("/trucks/:id", getTruck);
truckRouter.post("/trucks", createTruck);
truckRouter.delete("/trucks/:id", removeTruck);
truckRouter.put("/trucks/:id", updateTruck);

module.exports = truckRouter;
