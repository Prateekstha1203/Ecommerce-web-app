import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getaProduct,
  updateProduct,
} from "../controller/productController.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/",authMiddleware, isAdmin, createProduct);
router.get("/:productId", getaProduct);
router.get("/", getAllProduct);
router.put("/:id",authMiddleware, isAdmin, updateProduct);
router.delete("/:id",authMiddleware, isAdmin, deleteProduct);

export default router;
