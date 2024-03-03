const express = require("express");
const router = express.Router();

require("dotenv").config();
const {uploadImage} = require("../multer");
const { addImage } = require("../controllers/imageController");

router.post("/",uploadImage,addImage);

module.exports = router;
