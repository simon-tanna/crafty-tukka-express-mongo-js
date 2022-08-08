const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Event = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	start_time: {
		type: Date,
		required: true,
	},
	finish_time: {
		type: Date,
		required: true,
	},
    confirmed: {
        type: Boolean,
        required: true
    }
});
