import mongoose, { SchemaTypes } from "mongoose";

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
    required: true,
  },
  createDate: {
    type: Date,
    required: true,
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
    type: SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
});
export const Order = mongoose.model("Order", orderSchema);
