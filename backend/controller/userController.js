import { generateToken } from "../config/jsonWebToken.js";
import User from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler";
export const createUser = expressAsyncHandler(async (req, res) => {
  const userExist = req.body.email;
  try {
    const findUser = await User.findOne({ email: userExist });
    if (!findUser) {
      const newUser = await User.create(req.body);
      res.json({
        message: "User created",
        newUser,
      });
    } else {
      throw new Error("User already exists!!");
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
});

export const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //find user exist or not
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    res.json({
      _id: findUser?._id,
      firstName: findUser?.firstName,
      lastName: findUser?.lastName,
      email: findUser?.email,
      mobile: findUser?.mobile,
      role: findUser?.role,
      token: generateToken(findUser._id),
    });
  } else {
    throw new Error("Invalid credentials");
  }
});

export const getAllUsers = expressAsyncHandler(async (req, res) => {
  try {
    const getAllUsers = await User.find();
    res.json(getAllUsers);
  } catch (error) {
    throw new Error(error);
  }
});

export const getSingleUser = expressAsyncHandler(async (req, res) => {
  const { userId } = req.params;
  try {
    const userDetail = await User.findById(userId);
    res.send(userDetail);
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteUser = expressAsyncHandler(async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  try {
    const removedUser = await User.findByIdAndDelete(userId);
    if (!removedUser) {
      res.json({ message: "User not found" });
      return;
    }
    const remainingUsers = await User.find();

    res.json({
      message: "User deleted successfully",
      remainingUsers: remainingUsers,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const updateUser = expressAsyncHandler(async (req, res) => {
  const { userId } = req.params;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        firstName: req.body?.firstName,
        lastName: req.body?.lastName,
        email: req.body?.email,
        mobile: req.body?.mobile,
      },
      { new: true } 
    );
    res.json(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
});

