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
} from "../controller/userController.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/refresh", handleRefreshToken);
router.post("/forget-password-token", forgetPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.get("/logout", logOutUser);
router.get("/allUser", authMiddleware, isAdmin, getAllUsers);
router.get("/:userId", authMiddleware, isAdmin, getSingleUser);
router.delete("/:userId", authMiddleware, isAdmin,deleteUser);
router.put("/edit-user", authMiddleware, updateUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.put("/password", authMiddleware, isAdmin, updatePassword);

export default router;
