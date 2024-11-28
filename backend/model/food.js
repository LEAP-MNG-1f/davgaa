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
  ingeredient: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "category",
    required: true,
  },
});
export const food = mongoose.model("food", foodSchema);
