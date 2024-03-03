require("dotenv").config();
const port = process.env.PORT || 4000;
const addImage =  async (req, res) => {
  if(!req.file){
    return res.status(400).json({err:'Please give any file'})
  }
  res.status(200).json({
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
};

module.exports = { addImage };
