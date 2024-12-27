const express = require("express");
const router = express.Router();
const attractionController = require("../controllers/attractionController");

router.get("/", attractionController.getAllAttractions);
router.post("/", attractionController.createAttraction);
router.get("/toprated", attractionController.getTopRatedAttractions);

module.exports = router;
