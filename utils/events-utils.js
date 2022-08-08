const Event = require("../models/event");

const getAllEvents = () => Event.find();

const getEventById = (id) => Event.findById(id);

const addEvent = (body) => {
	return Event(body);
};

const deleteEvent = (id) => Event.findByIdAndRemove(id);

const amendEvent = (id, body) => {
	return Event.findByIdAndUpdate(id, body, { new: true });
};

module.exports = { getAllEvents, getEventById, addEvent, deleteEvent, amendEvent };
