const { signUp, login } = require("../controllers/authController");

const router = require("express").Router();

router.post("/sign-up", signUp);
router.post('/login',login)
module.exports = router;
