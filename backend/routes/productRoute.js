import express from "express";
import {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addWishlist,
  rating,

} from "../controller/productController.js";
import { uploadImage } from "../controller/uploadImageController.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";
import { productImgResize, uploadPhoto } from "../middleware/uploadImage.js";

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);
router.get("/:productId", getaProduct);
router.get("/", getAllProduct);
router.put("/wishlist", authMiddleware, addWishlist);
router.put("/rating", authMiddleware, rating);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImage
);


export default router;
