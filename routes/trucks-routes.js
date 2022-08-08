const { getTrucks } = require("../controllers/trucks-controller");
const express = require("express");
const truckRouter = express.Router();

truckRouter.get("/trucks", getTrucks);

module.exports = truckRouter;
