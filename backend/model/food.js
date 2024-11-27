import mongoose, { SchemaTypes } from "mongoose";


const foodSchema = new mongoose.Schema({
  name: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  process: {
    type: String,
    required: true,
  },
  ingeredient: {
    type: Date,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: SchemaTypes.ObjectId,
    ref: "category",
    required: true,
  },
});
export const food = mongoose.model("food", foodSchema);
