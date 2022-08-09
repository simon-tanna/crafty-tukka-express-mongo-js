const { signUpVenue } = require("../controllers/auth-controller");
const express = require("express");
const authRouter = express.Router();

authRouter.post("/signup", signUpVenue);

module.exports = authRouter;
