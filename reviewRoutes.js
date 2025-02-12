const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

router.post("/", reviewController.postReview);

module.exports = router;
