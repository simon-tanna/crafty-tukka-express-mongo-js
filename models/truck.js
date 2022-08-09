const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Truck = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	facebook: {
		type: String,
		required: false,
	},
	google_maps: {
		type: String,
		required: false,
	},
	website: {
		type: String,
		required: false,
	},
	mobile: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Truck", Truck);
