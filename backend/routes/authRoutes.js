import express from "express";
import {
  createUser,
  loginUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
} from "../controller/userController.js";
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/allUsers", getAllUsers);
router.get("/singleUser/:userId", getSingleUser);
router.delete("/deleteUser/:userId", deleteUser);
router.put("/:userId", updateUser);
export default router;
