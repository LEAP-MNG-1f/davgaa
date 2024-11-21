import { MongoClient } from "mongodb";

const connectionString =
  "mongodb+srv://davgaadavgaa12:99883439@test-davgaa.wtg6e.mongodb.net/";
const connectDb = async () => {
  const client = new MongoClient(connectionString);
  let conection;
  try {
    conection = await client.connect();
  } catch (e) {
    console.log("fail");
  }
  const db = conection.db("sample_mflix");
  return db;
};

export default connectDb;
