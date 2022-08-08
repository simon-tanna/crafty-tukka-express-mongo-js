const Event = require("../models/event");

const getAllEvents = () => Event.find();



module.exports = { getAllEvents }