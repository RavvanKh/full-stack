const { Schema, model } = require("mongoose");

const ProductSchema = Schema({
  id:{type:String,required:true},
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date: { type: Date, default: Date.now() },
  available: { type: Boolean, default: true },
});


module.exports = model('Product',ProductSchema)