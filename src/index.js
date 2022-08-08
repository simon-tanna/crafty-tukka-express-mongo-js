const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const venueRouter = require("../routes/venues-routes");
const truckRouter = require("../routes/trucks-routes");
//environment variables
require("dotenv").config();

const PORT = 4000;
const uri = "mongodb://localhost/crafty_tukka_mongo_db";
// const uri = process.env.ATLAS_URI;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", venueRouter);
app.use("/", truckRouter);

mongoose.connect(uri, {}, (err) => {
	if (err) {
		console.log(e, "Database connection error");
	} else {
		console.log("Connection established to database ");
	}
});

app.listen(PORT, () => {
	console.log(`crafty-tukka server listening on port: ${PORT}`);
});
