const express = require("express");
const { router } = express.Router();
const { userSignupValidator, userLogInValidator } = require("../validator");

router.post("/auth/sign-up", userSignupValidator);
router.post("/auth/log-in", userLogInValidator);

module.exports = router;