import { MongoClient } from "mongodb";

const connectionString =
  "mongodb+srv://ace12d192:wap3TZLOZeJlgLIq@cluster0.s6jvj.mongodb.net/";

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
