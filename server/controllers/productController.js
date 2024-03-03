const { Types } = require("mongoose");
const productModel = require("../models/productModel");

const getAllProducts = async (req, res) => {
  const products = await productModel.find();
  res.status(200).json(products);
};

const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  if (!Types.UUID.isValid(id)) {
    return res.status(400).json({ err: "Please use uuid as id" });
  }
  const product = await productModel.findOne({ id });
  if (!product) {
    return res.status(404).json({ err: "Product can not found" });
  }
  res.status(200).json(product);
};
const addProduct = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  if (!Types.UUID.isValid(id)) {
    return res.status(400).json({ err: "Please use uuid as id" });
  }
  try {
    const product = await productModel.create({ id, ...data });
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!Types.UUID.isValid(id)) {
    return res.status(400).json({ err: "Please use uuid as id" });
  }
  const product = await productModel.findOneAndDelete({ id });
  if (!product) {
    return res.status(404).json({ err: "Product can not found" });
  }
  res.status(200).json(product);
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  addProduct,
  deleteProduct,
};
