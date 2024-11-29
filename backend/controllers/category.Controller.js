import { category } from "../model/category.js";

const createCategory = async (request, response) => {
  try {
    const result = await category.create({
      name: "Main Course",
    });
    response.json({
      succes: true,
      data: result,
    });
    console.log(category);
  } catch (e) {
    console.log("Create category data failed");
  }
};

const getAllCategory = async (request, response) => {
  try {
    const result = await category.find();

    response.json({
      succes: true,
      data: result,
    });
  } catch (e) {
    console.log("Fetch category in failed");
  }
};

export { getAllCategory, createCategory };
