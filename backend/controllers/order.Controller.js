import { Order } from "../model/order.js";

const createOrder = async (req, res) => {
  const result = await Order.create({});
  res.json({
    succes: true,
    data: result,
  });
};
const getAllOrder = async (req, res) => {
  const result = await Order.find().populate("customer").populate("food");

  res.json({
    succes: true,
    data: result,
  });

  
  const updateOrder = async (req, res) => {
    const result = await Order.findByIdAndUpdate({
      _id: "",
    });

    res.json({
      success: true,
      data: result,
    });
  };
};
export { createOrder, getAllOrder, };
