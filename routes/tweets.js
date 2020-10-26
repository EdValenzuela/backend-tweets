const express = require("express");
const { router } = express.Router();

const { tweetsCreateValidator } = require("../validator");

router.get("/tweets"); 
router.get("/tweets/followers");

router.post("/tweet/create", tweetsCreateValidator); 

router.delete("/tweet/:tweetId"); 

router.param("tweetId", tweetId);

module.exports = router;