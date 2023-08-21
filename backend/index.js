import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import authRouter from "./routes/authRoutes.js";
import productRoute from "./routes/productRoute.js"
import cookieParser from "cookie-parser";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import morgan from "morgan";

const app = express();
dbConnect();
dotenv.config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(morgan("dev"))
// app.use("/", (req, res) => {
//   res.send("Hello from server side");
// });

app.use("/api/user", authRouter);
app.use("/api/product",productRoute)
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is runnning at port ${PORT}`);
});
