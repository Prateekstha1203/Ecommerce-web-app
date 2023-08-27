import express from "express";
import {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addWishlist,
  rating,
  uploadImage
} from "../controller/productController.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";
import { productImgResize, uploadPhoto } from "../middleware/uploadImage.js";

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);

router.post(
  "/",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImage
);
router.get("/:productId", getaProduct);
router.get("/",authMiddleware, isAdmin, getAllProduct);
router.put("/wishlist", authMiddleware, addWishlist);
router.put("/rating", authMiddleware, rating);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

export default router;
