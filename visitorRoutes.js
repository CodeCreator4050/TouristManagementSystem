const express = require("express");
const router = express.Router();
const visitorController = require("../controllers/visitorController");

router.post("/", visitorController.registerVisitor);
router.get("/activity", visitorController.getVisitorActivity);

module.exports = router;
