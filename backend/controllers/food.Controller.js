import { food } from "../model/food.js";

const createFood = async (request, response) => {
  try {
    const result = await food.create({
      name: "bantan",
      price: "950339",
      image:
        "https://s23209.pcdn.co/wp-content/uploads/2019/04/Mexican-Street-TacosIMG_9091.jpg",
      category: "67496be1a95cb44795eccb1c",
      ingeredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    });

    response.json({
      succse: true,
      data: result,
    });
  } catch (e) {
    console.log("Create food data failed");
  }
};

const getAllFoods = async (request, response) => {
  const groupedFood = await food.aggregate([
    {
      $lookup: {
        from: "categories", // Assuming your categories collection is named 'categories'
        localField: "category",
        foreignField: "_id",
        as: "category",
      },
    },
    { $unwind: "$category" },
    {
      $group: {
        _id: "$category.name",
        items: { $push: "$$ROOT" },
      },
    },
  ]);

  response.json({
    success: true,
    data: groupedFood,
  });
};
// const getAllFoods = async (request, response) => {
//   try {
//     const result = await food.find({}).populate("categoryId");
  
//     response.json({
//       succse: true,
//       data: result,
//     });
//   } catch (e) {
//     console.log("Fetch food product in failed");
//   }
// };

export { createFood, getAllFoods };
