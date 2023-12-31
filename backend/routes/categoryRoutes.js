import express from "express";
import {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategory,
  getSingleCategory,
} from "../controller/categoryController.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createCategory);
router.get("/",getAllCategory);
router.get("/:id", authMiddleware, isAdmin, getSingleCategory);
router.put("/:id", authMiddleware, isAdmin, updateCategory);
router.delete("/:id", authMiddleware, isAdmin, deleteCategory);

export default router;
