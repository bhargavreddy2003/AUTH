import express from "express";
import authRoute from "./Routes/auth.Route.js";

import dotenv from "dotenv";
import { connect } from "mongoose";
import { connectDB } from "./db/ConnectDB.js";
dotenv.config();
const app = express();
app.use(express.json()); //allows to parse through request body
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  connectDB();
  console.log("server running on 3000");
});
