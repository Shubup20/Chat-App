import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.routes.js";
import messageRoute from "./routes/message.routes.js";

import cookieParser from "cookie-parser";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to MongoDb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

const PORT = process.env.PORT || 3000;

// middle ware
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("helo World");
});

// import routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoute);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
