const { getEvents } = require("../controllers/events-controller");
const express = require("express");
const eventRouter = express.Router();

eventRouter.get("/events", getEvents);

module.exports = eventRouter;
