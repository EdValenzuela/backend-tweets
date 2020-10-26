const express = require("express");
const { router } = express.Router();

const { addUser, getAllUsers } = require("../controllers/users");

router.get("/user/list"); 
router.get("/user/profile"); 
router.put("/user");

module.exports = router;