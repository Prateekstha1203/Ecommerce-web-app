import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import authRouter from "./routes/authRoutes.js";
import bodyParser from "body-parser";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
const app = express();
dbConnect();
dotenv.config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use("/", (req, res) => {
//   res.send("Hello from server side");
// });

app.use("/api/user", authRouter);
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is runnning at port ${PORT}`);
});
