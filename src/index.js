const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("../routes/venues-routes");

const PORT = 4000;
const dbConnect = "mongodb://localhost/crafty_tukka_mongo_db";
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router)

mongoose.connect(dbConnect, {}, (err) => {
	if (err) {
		console.log(e, "Database connection error");
	} else {
		console.log("Connection established to database ");
	}
});

app.listen(PORT, () => {
	console.log(`crafty-tukka server listening on port: ${PORT}`);
});
