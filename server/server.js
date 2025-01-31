import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import User from "./models/booking.js";

dotenv.config();

const URI = process.env.MONGODB_URI;
if (!URI) {
  throw new Error("MONGODB_URI is not defined in the environment variables");
}

const PORT = process.env.PORT || 3001;

mongoose.connect(URI);

const app = express();
app.use(express.json());
app.use(cors());

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  User.findOne({email: email})
  .then(user => {
    if(user){
      if(user.password === password){
        res.json({message: "Login successful"});
      } else {
        res.status(400).json({message: "Invalid password"});
      }
    } else {
      res.status(400).json({message: "User not found"});
    }
  });
});

app.post('/register', async (req, res) => {
  User.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(err));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});