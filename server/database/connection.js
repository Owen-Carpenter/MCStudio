import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const URI = "mongodb+srv://owencarpenter:veawUis6rieoHcCs@mcs-loginauth.fmzbb.mongodb.net/Users"
//console.log('Environment Variables:', process.env);
console.log('MONGODB_URI:', process.env.MONGODB_URI);
if (!URI) {
  throw new Error("MONGODB_URI is not defined in the environment variables");
}
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
}

let db = client.db("users");

export default db;
