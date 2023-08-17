import User from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler";
import { generateToken } from "../config/jsonWebToken.js";
import { generateRefreshToken } from "../config/refreshToken.js";
import { validMongodbId } from "../utils/validateMongodbId.js";
import jwt from "jsonwebtoken";
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
    const refreshToken = await generateRefreshToken(findUser?._id);
    const updateUser = await User.findByIdAndUpdate(
      findUser?._id,
      { refreshToken: refreshToken },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
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

export const handleRefreshToken = expressAsyncHandler(async (req, res) => {
  const cookies = req?.cookies;
  if (!cookies?.refreshToken)
    throw new Error("There is no refresh token in cookies");
  const refreshToken = cookies.refreshToken;
  const user = await User.findOne({ refreshToken });
  console.log(user);
  if (!user)
    throw new Error("The refresh token is not present or matched in database");
  jwt.verify(refreshToken, process.env.SECRET_KEY, (err, decoded) => {
    console.log(decoded.id);
    if (err || user.id !== decoded.id)
      throw new Error("Something went wrong with refresh token.");
    const accessToken = generateToken(user._id);
    res.json({ accessToken });
  });
});

export const logOutUser = expressAsyncHandler(async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.refreshToken) {
    throw new Error("There is no refresh token in the cookies");
  }
  const refreshToken = cookies?.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", { httpOnly: false, secure: true });
    return res.sendStatus(204);
  }

  // await User.findByIdAndUpdate(refreshToken, { refreshToken: "" });
  await User.findByIdAndUpdate(user._id, { refreshToken: "" });

  res.clearCookie("refreshToken", { httpOnly: false, secure: true });
  return res.sendStatus(204).json({message:"User logout successfully"}); //forbidden
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
  validMongodbId();
  try {
    const userDetail = await User.findById(userId);
    res.send(userDetail);
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteUser = expressAsyncHandler(async (req, res) => {
  const { userId } = req.params;
  validMongodbId();
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
  const { _id } = req.user;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      _id,
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

export const blockUser = expressAsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  validMongodbId();
  try {
    const blockedUser = await User.findByIdAndUpdate(
      id,
      { isBlocked: true },
      { new: true }
    );
    res.json({ message: "User is blocked", blockedUser });
  } catch (error) {
    throw new Error(error);
  }
});

export const unblockUser = expressAsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  validMongodbId();
  try {
    const unblockedUser = await User.findByIdAndUpdate(
      id,
      { isBlocked: false },
      { new: true }
    );
    res.json({ message: "User is unblocked", unblockedUser });
  } catch (error) {
    throw new Error(error);
  }
});
