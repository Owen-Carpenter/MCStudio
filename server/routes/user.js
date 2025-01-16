import express from 'express';

import db from '../database/connection.js';

import { ObjectId } from 'mongodb';

const router = express.Router();

router.get("/api/login", async (req, res) => {
    let collection = await db.collection("users");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
})

export default router;