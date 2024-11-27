import express from "express";
import { createOrder, getAllOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.get("/orders", getAllOrder);
orderRouter.post("/orders", createOrder);

export default orderRouter;
