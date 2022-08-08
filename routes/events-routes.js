const {
	getEvents,
	getEvent,
	createEvent,
	removeEvent,
    updateEvent
} = require("../controllers/events-controller");
const express = require("express");
const eventRouter = express.Router();

eventRouter.get("/events", getEvents);
eventRouter.get("/events/:id", getEvent);
eventRouter.post("/events", createEvent);
eventRouter.delete("/events/:id", removeEvent);
eventRouter.put("events/:id", updateEvent)

module.exports = eventRouter;
