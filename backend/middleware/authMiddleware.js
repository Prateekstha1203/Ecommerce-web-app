import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";

export const authMiddleware = expressAsyncHandler(async (req, res, next) => {
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(decoded?._id);
        req.user = user;
        console.log(user)
        next();
      }
    } catch (error) {
      throw new Error("Not authorized token expired. Please try again");
    }
  } else {
    throw new Error("There is no token attached to header");
  }
});

export const isAdmin = expressAsyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await User.findOne({ email });
  if (adminUser.role !== "admin") {
    throw new Error("You are not an admin");
  } else {
    next();
  }
});
