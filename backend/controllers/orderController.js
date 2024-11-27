import { Order } from "../model/order.js";

const createOrder = async (req, res) => {
  const result = await Order.create({
    orderNumber: 1,
    totalPrise: "215887",
    process: "asdaa",
    createDate: "dasd",
    district: "asd",
    khoroo: "asd",
    apartment: "asdad",
    customer: "674685041cfec5c62d0f1361",
  });
  res.json({
    succes: true,
    data: result,
  });
};
const getAllOrder = async (req, response) => {
  const result = await Order.find().populate("customer");

  response.json({
    succes: true,
    data: result,
  });
};
export { createOrder, getAllOrder };
