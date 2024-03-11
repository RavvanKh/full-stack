const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrytp = require("bcrypt");

const signUp = async (req, res) => {
  const check = await User.findOne({ email: req.body.email });
  if (check) {
    res.status(400).json({ err: "Email has already taken" });
  }
  let card = {};
  for (let index = 0; index < 300; index++) {
    card[index] = 0;
  }
  const role = req.body.email === "admin@gmail.com" ? "admin" : "user";
  const hashedPassword = await bcrytp.hash(req.body.password, 10);
  const user = User.create({
    ...req.body,
    role,
    password: hashedPassword,
    cardData: card,
  });
  const data = { user: { id: user?.id } };

  const token = jwt.sign(data, "secret_ecom");
  res.cookie("auth", token);
  user?.role === "user" && res.cookie("role", user?.role);
  res.status(200).json({ token });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(404).json({ err: "User is not found" });
  }
  const compare = await bcrytp.compare(password, user?.password);
  if (!compare) {
    return res
      .status(400)
      .json({ err: "Please use correct email or password" });
  }
  const data = { user: { id: user?.id } };
  const token = jwt.sign(data, "secret_ecom");
  res.cookie("auth", token);
  user?.role === "user" && res.cookie("role", user?.role);
  res.status(200).json({ token });
};

const signOut = async (req, res) => {
  res.clearCookie("auth");
  res.clearCookie("role");
  res.status(200).json({ message: "Signed out" });
};

module.exports = { signUp, login, signOut };
