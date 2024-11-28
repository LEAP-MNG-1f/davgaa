import mongoose, { SchemaTypes } from "mongoose";
const enumprocess = ["Breakfast", " Soup ", "Main Course", "Dessert"];
const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  totalPrise: {
    type: String,
    required: true,
  },
  process: {
    type: String,
    enum: enumprocess,
    default: "progress",
    required: true,
  },
  createDate: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  district: {
    type: String,
    required: true,
  },
  khoroo: {
    type: String,
    required: true,
  },
  apartment: {
    type: String,
    required: true,
  },
  customer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  food: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "food",
    required: true,
  },
});
export const Order = mongoose.model("Order", orderSchema);
