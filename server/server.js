import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import User from "./models/user.js";

dotenv.config();

const URI = process.env.MONGODB_URI;
if (!URI) {
  throw new Error("MONGODB_URI is not defined in the environment variables");
}

mongoose.connect(URI);

const app = express();
app.use(express.json());
app.use(cors());

app.post('/register', async (req, res) => {
  User.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(err));
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});