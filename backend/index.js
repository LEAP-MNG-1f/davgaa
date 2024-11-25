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

  let collection = db.collection("movies");
  console.log(collection);
  let results = await collection.find().limit(12).toArray();

  response.json({ succes: true, data: results });
});

server.post("/create-user", async (request, response) => {
  const db = await connectDb();

  const collection = db.collection("users");
  const results = await collection.insertOne({
    name: "baldan",
    phone: "99112233",
  });
  // console.log(collection);
  // let results = await collection.find().limit(12).toArray();

  response.json({ succes: true, data: results });
});

server.post("/", async (req, response) => {
  const db = await connectDb();

  const collection = db.collection("product");
  const result = await collection.insertOne({
    name: "car dodge",
    owner: "davgaa",
    price: "1000000$",
  });

  response.json({
    succes: true,
    data: result,
  });
});
server.put("/update-user", async (req, response) => {
  const db = await connectDb();

  const collection = db.collection("product");
  const result = await collection.findOneAndUpdate(
    {
      owner: "davgaa",
    },
    {
      $set: {
        name: "car dodge",
        owner: "davgaa",
        price: "8800",
        date: new Date(),
      },
    }
  );

  response.json({
    succes: true,
    data: result,
  });
});

server.delete("/delete-user", async (req, response) => {
  const db = await connectDb();

  const collection = db.collection("product");
  const result = await collection.findOneAndDelete({
    owner: "buynaas",
  });

  response.json({
    succes: true,
    data: result,
  });
});
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} ajillaj ehllee`);
});
