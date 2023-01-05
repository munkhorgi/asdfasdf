import mongoose from "mongoose";
import express from "express";
import userRouter from "./router/user.js";
import postRouter from "./router/post.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.MONGO_URL || "";
const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(port, async () => {
  connect();
  console.log(`Server running ${port}`);
});

const connect = () => {
  try {
    mongoose.connect(uri, {}).then(() => {
      console.log("connect to DB");
    });
  } catch (error) {
    console.error("could not connnect to DB");
    process.exit(1);
  }
};
