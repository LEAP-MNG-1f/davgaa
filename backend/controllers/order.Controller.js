import { Order } from "../model/order.js";

const createOrder = async (request, response) => {
  try {
    const result = await Order.create({
      orderNumber: "1",
      totalPrise: "21000",
      customer: "6749285f66c660974f3ad9c9",
      district: "Баянзүрх дүүрэг",
      food: "674928a79ca6d431736237c9",
      khoroo: "3-р хороо",
      apartment: "Нархан хотхон",
      createDate: new Date(),
     
      
      phoneNumber: "9888848",
      detail: "erevrv",
    });
    response.json({
      succes: true,
      data: result,
    });
  } catch (e) {
    console.log("Create order data faild");
    return response.json({
      succes: false,
      data: e,
    });
  }
};

const getAllOrders = async (request, response) => {
  try {
    const result = await Order.find().populate("User").populate("food");

    response.json({
      succes: true,
      data: result,
    });
  } catch (e) {
    console.log("fetch order in failed");
  }
};

export { getAllOrders, createOrder };
