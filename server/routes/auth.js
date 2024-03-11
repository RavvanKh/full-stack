const { signUp, login, signOut } = require("../controllers/authController");

const router = require("express").Router();

router.post("/sign-up", signUp);
router.post("/login", login);
router.get("/sign-out", signOut);
module.exports = router;
