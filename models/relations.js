const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const RelationsSchema = new mongoose.Schema(
    {
      userId: { type: ObjectId, ref: "Users" },
      userRelationId: { type: ObjectId, ref: "Users" },
    },
    { timestamps: true }
  );

module.exports = mongoose.model("Relations", RelationsSchema);