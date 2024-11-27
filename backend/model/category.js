import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: Number,
    required: true,
  },
});
export const category = mongoose.model("category", categorySchema);
