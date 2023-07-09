const express = require('express');
const router = express.Router();
const { generateImage } = require("../controllers/generateImage");

router.get("/generateimage", generateImage);

router.post("/generateimage", generateImage);

module.exports = router;