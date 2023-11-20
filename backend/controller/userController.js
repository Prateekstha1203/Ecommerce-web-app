import User from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler";
import { generateToken } from "../config/jsonWebToken.js";
import { generateRefreshToken } from "../config/refreshToken.js";
import { validMongodbId } from "../utils/validateMongodbId.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "./emailController.js";
import crypto from "node:crypto";
import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";
import Coupon from "../models/couponModel.js";
import Order from "../models/orderModel.js";
import uniqid from "uniqid";
//Creating user
export const createUser = expressAsyncHandler(async (req, res) => {
  const userExist = req.body.email;
  try {
    const findUser = await User.findOne({ email: userExist });
    console.log(findUser)
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

//Login user
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

export const loginAdmin = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const findAdmin = await User.findOne({ email });
    if (findAdmin.role !== "admin") throw new Error("Not Authorized");

    if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
      const refreshToken = await generateRefreshToken(findAdmin?._id);
      const updateAdmin = await User.findById(
        findAdmin?._id,
        { refreshToken },
        { new: true }
      );
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        maxAge: 72 * 60 * 60 * 1000,
      });
      res.json({
        id: findAdmin?._id,
        firstName: findAdmin?.firstName,
        lastName: findAdmin?.lastName,
        email: findAdmin?.email,
        mobile: findAdmin?.mobile,
        role: findAdmin?.role,
        token: generateToken(findAdmin._id),
      });
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    throw new Error(error);
  }
});

export const logOutUser = expressAsyncHandler(async (req, res) => {
  const cookies = req?.cookies;
  console.log(cookies);
  try {
    if (!cookies?.refreshToken) {
      throw new Error("There is no refresh token in the cookies");
    }
    const refreshToken = cookies?.refreshToken;
    const user = await User.findOne({ refreshToken });
    console.log(user);
    if (!user) {
      res.clearCookie("refreshToken", { httpOnly: false, secure: true });
      return res.sendStatus(204);
    }

    res.cookie("refreshToken", "", {
      httpOnly: false,
      secure: true,
    });

    //await User.findByIdAndUpdate(refreshToken, { refreshToken: "" });
    await User.findByIdAndUpdate(user._id, { refreshToken: "" });

    res.clearCookie("refreshToken", { httpOnly: false, secure: true });
    return res.json({ message: "User logout successfully" }); //forbidden
  } catch (error) {
    throw new Error(error);
  }
});

export const handleRefreshToken = expressAsyncHandler(async (req, res) => {
  const cookies = req.cookies;
  const refreshToken = cookies?.refreshToken;
  if (refreshToken) throw new Error(" Refresh Token is not passed");

  const user = await User?.findOne({ refreshToken });
  if (!user)
    throw new Error("The refresh token is not present or matched in database");

  jwt.verify(refreshToken, process.env.SECRET_KEY, (err, decoded) => {
    if (err || decoded?._id !== user?._id) {
      throw new Error("User not matched");
      const accessToken = generateToken(user._id);
      res.json({ accessToken });
    }
  });
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

  // Validate MongoDB ID
 console.log(userId, req.params)

  try {
    const userDetail = await User.findById(userId);
    res.send(userDetail);
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteUser = expressAsyncHandler(async (req, res) => {
  const { userId } = req.params;
  validMongodbId(userId);
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

export const updatePassword = expressAsyncHandler(async (req, res, next) => {
  const { _id } = req.user;
  const { password } = req.body;
  validMongodbId(_id);
  const user = await User.findById(_id);

  if (password) {
    user.password = password;
    const updatedUser = await user.save();
    res.json(updatedUser);
  } else {
    res.json(user);
  }
});

export const forgetPasswordToken = expressAsyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found with this email");
    const token = await user.createResetToken();
    await user.save();
    const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now. <a href='http://localhost:/api/user/reset-password/${token}'>Click Here</>`;
    const data = {
      to: email,
      text: "Hey User",
      subject: "Forgot Password Link",
      htm: resetURL,
    };
    sendEmail(data);
    res.json(token);
  } catch (error) {
    throw new Error(error);
  }
});
export const resetPassword = expressAsyncHandler(async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) throw new Error(" Token Expired, Please try again later");
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  res.json(user);
});

export const saveAddress = expressAsyncHandler(async (req, res) => {
  const { address } = req?.body;
  const { _id } = req.user;
  validMongodbId(_id);
  try {
    const updateUser = await User.findByIdAndUpdate(
      _id,
      { address },
      { new: true }
    );
    res.json(updateUser);
  } catch (error) {
    throw new Error(error);
  }
});

export const getWishlist = expressAsyncHandler(async (req, res) => {
  const { _id } = req.user;
  try {
    const findUser = await User.findById(_id).populate("wishlist");
    res.json(findUser);
  } catch (error) {
    throw new Error(error);
  }
});

export const userCart = expressAsyncHandler(async (req, res) => {
  const { _id } = req.user;
  const cartArray = req.body.cart;
  validMongodbId(_id);
  try {
    let products = [];
    const user = await User.findById(_id);
    await Cart.findOneAndDelete({ orderby: user?._id });

    console.log(cartArray.length);
    for (let i = 0; i < cartArray.length; i++) {
      let object = {};
      object.product = cartArray[i]._id;
      object.count = cartArray[i].count;
      object.color = cartArray[i].color;
      let getPrice = await Product.findById(cartArray[i]._id)
        .select("price")
        .exec();
      object.price = getPrice.price;

      products.push(object);
    }
    let cartTotal = 0;
    for (let i = 0; i < products.length; i++) {
      cartTotal = cartTotal + products[i].price * products[i].count;
      console.log(products, cartTotal);
    }
    let newCart = await new Cart({
      products,
      cartTotal,
      orderby: user?._id,
    }).save();
    res.json(newCart);
  } catch (error) {
    throw new Error(error);
  }
});

export const getUserCart = expressAsyncHandler(async (req, res) => {
  const { _id } = req.user;
  validMongodbId(_id);
  console.log(_id)
  try {
    console.log("User",_id)
    const cart = await Cart.findOne({ orderby: _id }).populate(
      "products.product"
    );
    console.log("cart",cart)
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});

export const emptyCart = expressAsyncHandler(async (req, res) => {
  const { _id } = req.user;
  validMongodbId(_id);
  console.log();
  try {
    const cartRemove = await Cart.findOneAndRemove({ orderby: _id });
    res.json(cartRemove);
  } catch (error) {
    throw new Error(error);
  }
});

export const applyCoupon = expressAsyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { coupon } = req.body;
  const validCoupon = await Coupon.findOne({ name: coupon });
  if (!validCoupon)
    throw new Error("Invalid coupon Please add another coupon.");
  console.log(validCoupon);
  const user = await User.findById({ _id });
  console.log(user);
  const { cartTotal } = await Cart.findOne({ orderby: user._id }).populate(
    "products.product"
  );
  console.log(cartTotal);

  const cartTotalAfterDiscount =
    cartTotal - ((cartTotal / 100) * validCoupon.discount).toFixed(2);

  const cartOuput = await Cart.findOneAndUpdate(
    { orderby: user._id },
    { totalAfterDiscount: cartTotalAfterDiscount },
    { new: true }
  );
  res.json({ cartOuput });
});

export const createOrder = expressAsyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { COD, couponApplied } = req.body;
  console.log(COD, couponApplied)
  validMongodbId(_id);
  try {
    if (!COD) throw new Error("Create cash order fail!!!");

    const user = await User.findById(_id);
    console.log("User",user)

    let userCart = await Cart.findOne({ orderby: user._id });
    console.log("usercart",userCart)  
    let finalAmount = 0;
    if (couponApplied && userCart.totalAfterDiscount) {
      finalAmount = userCart.totalAfterDiscount;
    } else {
      finalAmount = userCart.cartTotal;
    }
    let newOrder = await new Order({
      products: userCart.products,
      paymentIntent: {
        id: uniqid(),
        method: "COD",
        amount: finalAmount,
        status: "Cash on Delivery",
        created: Date.now(),
        currency: "usd",
      },
      orderby: user._id,
      orderStatus: "Cash on Delivery",
    }).save();
    let update = userCart.products.map((item) => {
      return {
        updateOne: {
          filter: { _id: item.product._id },
          update: { $inc: { quantity: -item.count, sold: +item.count } },
        },
      };
    });
    const updated = await Product.bulkWrite(update, {});
    res.json({ message: "success" });
  } catch (error) {
    throw new Error(error);
  }
});

export const getOrders = expressAsyncHandler(async (req, res) => {
  const { _id } = req.user;
  validMongodbId(_id);
  try {
    const userorders = await Order.findOne({ orderby: _id })
      .populate("products.product")
      .populate("orderby")
      .exec();
    res.json(userorders);
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllOrders = expressAsyncHandler(async (req, res) => {
  try {
    const alluserorders = await Order.find()
      .populate("products.product")
      .populate("orderby")
      .exec();
    res.json(alluserorders);
  } catch (error) {
    throw new Error(error);
  }
});
export const getOrderByUserId = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const userorders = await Order.findOne({ orderby: id })
      .populate("products.product")
      .populate("orderby")
      .exec();
    res.json(userorders);
  } catch (error) {
    throw new Error(error);
  }
});
export const updateOrderStatus = expressAsyncHandler(async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateOrderStatus = await Order.findByIdAndUpdate(
      id,
      {
        orderStatus: status,
        paymentIntent: {
          status: status,
        },
      },
      { new: true }
    );
    res.json(updateOrderStatus);
  } catch (error) {
    throw new Error(error);
  }
});
