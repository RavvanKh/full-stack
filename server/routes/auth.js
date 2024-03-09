const { signUp } = require("../controllers/userController");

const router = require("express").Router();

router.post("/sign-up", signUp);

module.exports = router;
