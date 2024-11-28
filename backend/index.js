import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import orderRouter from "./routes/orderRoute.js";
import foodRouter from "./routes/foodRoute.js";
import categoryRouter from "./routes/categoryRoute.js";

mongoose.connect(
  "mongodb+srv://davgaadavgaa12:99883439@test-davgaa.wtg6e.mongodb.net/food-delivery"
);

dotenv.config();

const server = express();
const PORT = 8000;

server.use(cors());
server.use("/api", userRouter);
server.use("/api", orderRouter);
server.use("/api", foodRouter);
server.use("/api", categoryRouter);

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} ajillaj ehllee`);
});
