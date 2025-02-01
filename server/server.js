import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import registerRoutes from './routes/register.js';
import authRoutes from './routes/auth.js';

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
app.use('/auth', authRoutes);
app.use('/register', registerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});