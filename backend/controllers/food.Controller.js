import { food } from "../model/food.js";

const createFood = async (req, res) => {
  const result = await food.create({
    name: "",
    price: "",
    image: "",
    process: "",
    ingeredient: "",
  });
  res.json({
    succes: true,
    data: result,
  });
};
const getAllFood = async (req, response) => {
  const result = await Order.find().populate("category");

  response.json({
    succes: true,
    data: result,
  });
};
export { createFood, getAllFood };
