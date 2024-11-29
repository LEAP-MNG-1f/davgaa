import mongoose from "mongoose";
const enumprocess = ["Breakfast", " Soup ", "Main Course", "Dessert"];
const enumpay = ["cash", "card"];
const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  totalPrise: {
    type: Number,
    required: true,
  },
  process: {
    type: String,
    enum: enumprocess,
    default: "Main Course",
  },
  paymentType: {
    type: String,
    enum: enumpay,
    default: "cash",
  },
  createDate: {
    type: Date,
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
  phoneNumber: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
});
export const Order = mongoose.model("Order", orderSchema);
