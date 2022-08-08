const { getAllEvents } = require("../utils/events-utils");

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

module.exports = { getEvents };
