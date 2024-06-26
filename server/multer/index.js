const multer = require("multer");
const path = require('path')

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

const uploadImage = upload.single('product')
module.exports = {uploadImage};
