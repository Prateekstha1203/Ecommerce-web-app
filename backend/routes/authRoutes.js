import express from "express";
import {
  createUser,
  loginUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logOutUser,
  updatePassword,
  forgetPasswordToken,
  resetPassword,
  loginAdmin,
  saveAddress,
  userCart,
  getWishlist,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  getAllOrders,
  updateOrderStatus,
  getOrderByUserId,
} from "../controller/userController.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";
const router = express.Router();

//login and register
router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/admin-login", loginAdmin);
router.get("/logout", logOutUser);

//generate token and password
router.get("/refresh", handleRefreshToken);
router.post("/forget-password-token", forgetPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put("/password", authMiddleware, isAdmin, updatePassword);

//CRUD OPERATION ON USER
router.get("/allUser",  getAllUsers);
router.get("/:userId", authMiddleware, isAdmin, getSingleUser);
router.delete("/:userId", authMiddleware, isAdmin, deleteUser);
router.put("/edit-user", authMiddleware, updateUser);

//User block unblock
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

//others route
router.get("/wishlist", authMiddleware, getWishlist);
router.put("/save-address", authMiddleware, saveAddress);

//Cart
router.post("/cart/viewcart", authMiddleware, userCart);
router.get("/cart/user-cart", authMiddleware, getUserCart);
router.delete("/cart", authMiddleware, emptyCart);


router.post("/cart/cash-order", authMiddleware, createOrder);


//Coupon
router.post("/cart/coupon", authMiddleware, applyCoupon);

//Orders
router.get("/order/get-orders", authMiddleware, getOrders);
router.get("/order/getallorders", authMiddleware, isAdmin, getAllOrders);
router.post("/order/getorderbyuser/:id", authMiddleware, isAdmin, getOrderByUserId);
router.put(
  "/order/update-order/:id",
  authMiddleware,
  isAdmin,
  updateOrderStatus
);
export default router;
