import express from "express";
import cors from "cors";
import users from "./routes/user.js";
import dotenv from 'dotenv';

dotenv.config();

const PORT = 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", users);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

