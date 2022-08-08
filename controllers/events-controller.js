const {
	getAllEvents,
	getEventById,
	addEvent,
	deleteEvent,
	amendEvent,
} = require("../utils/events-utils");

const getEvents = (res, req) => {
	getAllEvents().exec((err, events) => {
		if (err) {
			res.status(500);
			return res.json({ error: err.message });
		} else {
			res.status(200);
			res.send(events);
		}
	});
};

const getEvent = (res, req) => {
	getEventById(req.params.id).exec((err, event) => {
		if (err) {
			res.status(404);
			return res.json({ error: "Event not found, invalid id path" });
		} else {
			res.status(200);
			res.send(event);
		}
	});
};

const createEvent = (res, req) => {
	addEvent(req.body).save((err, event) => {
		if (err) {
			res.status(500);
			return res.json({ error: err.message });
		} else {
			res.status(201);
			res.send(event);
		}
	});
};

const removeEvent = (res, req) => {
	deleteEvent(req.params.id).exec((err) => {
		if (err) {
			res.status(404);
			return res.json({ error: err.message });
		} else {
			res.status(200);
			return res.json({ success: "Event Removed" });
		}
	});
};

const updateEvent = (res, req) => {
	amendEvent(req.params.id, req.body).exec((err, event) => {
		if (err) {
			res.status(404);
			return res.json({ error: err.message });
		} else {
			res.status(200);
			res.send(event);
		}
	});
};

module.exports = { getEvents, getEvent, createEvent, removeEvent, updateEvent };
