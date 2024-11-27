import { category } from "../model/category.js";

const createCategory = async (req, res) => {
  const result = await category.create({
    name: "",
  });
  res.json({
    succes: true,
    data: result,
  });
};
const getAllCategory = async (req, response) => {
  const result = await category.find();

  response.json({
    succes: true,
    data: result,
  });
};
export { createCategory, getAllCategory };
