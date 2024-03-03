const {
  addProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct
} = require("../controllers/productController");

const router = require("express").Router();

router.get("/", getAllProducts);
router.get('/:id',getSingleProduct)
router.post("/:id", addProduct);
router.delete("/:id", deleteProduct);
module.exports = router;
