import express from "express";
import {
  createCategory,
  getAllCategory,
} from "../controllers/category.Controller.js";

const categoryRouter = express.Router();

categoryRouter.get("/categorys", getAllCategory);
categoryRouter.post("/categorys", createCategory);

export default categoryRouter;
