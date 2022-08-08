const { getVenues } = require("../controllers/venues-controller");
const express = require("express");
const router = express.Router();

router.get("/venues", getVenues);

module.exports = router;
