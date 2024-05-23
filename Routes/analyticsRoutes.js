const express = require("express");
const authMiddelware = require("../middelware/authMiddleware");
const {
  bloodGroupDetailsContoller,
} = require("../controllers/analyticsControllers");

const router = express.Router();

//routes

//GET BLOOD DATA
router.get("/bloodGroups-data", authMiddelware, bloodGroupDetailsContoller);

module.exports = router;
