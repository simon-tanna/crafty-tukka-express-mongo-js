import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const PORT = 4000;

const app = express();

app.listen(PORT, () => {
	console.log(`crafty-tukka server listening on port: ${PORT}`);
});
