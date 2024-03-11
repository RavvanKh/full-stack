const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  cardData: {
    type: Object,
  },
  role: { type: String, enum: ["user", "admin"] },
  date: { type: Date, default: Date.now() },
});

module.exports = model("User", UserSchema);
