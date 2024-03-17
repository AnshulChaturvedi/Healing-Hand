const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const medicineSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
      maxlength: 70,
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Description is required"],
    },
    Cost: {
      type: String,
      trim: true,
      required: [true, "Cost is required"],
    },
    available: {
      type: Boolean,
      default: true,
    },
    medicineType: {
      type: ObjectId,
      ref: "medicineType",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("medicine", medicineSchema);