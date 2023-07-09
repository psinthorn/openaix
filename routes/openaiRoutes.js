const express = require('express');
const router = express.Router();
const { generateImage } = require("../controllers/generateImage");

router.get("/generateimage", generateImage);

router.post("/generateimage", (req, res) => {
  res.status(200).json({ msg: "generate image now"})
});

module.exports = router;