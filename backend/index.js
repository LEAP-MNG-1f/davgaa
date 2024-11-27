import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import orderRouter from "./routes/orderRoute.js";

mongoose.connect(
  "mongodb+srv://davgaadavgaa12:99883439@test-davgaa.wtg6e.mongodb.net/food-delivery"
);

dotenv.config();

const server = express();
const PORT = 8000;

server.use(cors());
server.use("/api", userRouter);
server.use("/api", orderRouter);

// server.post("/create", async (req, res) => {
//   const result = await animeModel.create([
//     {
//       name: "naruto",
//       year: "1223",
//     },
//     {
//       name: "baruto",
//       year: "1223",
//     },
//
//       name: "varuto",
//       year: "1223",
//     },
//   ]);
//   console.log();

//   res.json({
//     succes: true,
//     Data: result,
//   });
// });
// server.delete("/delete-user", async (req, response) => {

//   const result = await animeModel.deleteOne({
//     _id: "6743f22d5c79bada261beeb5",
//   });

//   response.json({
//     succes: true,
//     data: result,
//   });
// });
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} ajillaj ehllee`);
});
