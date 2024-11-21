import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./connectDB.js";
dotenv.config();

const server = express();
const PORT = 8000;

server.use(cors());

server.get("/", async (request, response) => {
  const db = await connectDb();

  let collection = db.collection("comments");
  let results = await collection.find().limit(10).toArray();

  response.json({ succes: true, data: results });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} ajillaj ehllee`);
});
