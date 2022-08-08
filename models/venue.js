const mongoose = require("mongoose");

export const venueSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	password_confirmation: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	lat: {
		type: Number,
		required: true,
	},
	lng: {
		type: Number,
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

export const Venue = mongoose.Model("Venue", venueSchema);