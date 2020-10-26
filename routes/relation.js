const express = require("express");
const { router } = express.Router();

router.get("/relation");
router.post("/relation/create/:userRelationId");
router.delete("/relation/:userRelationId");

router.param("userRelationId", userRelationId);

module.exports = router;