import express from "express";
import { uploadImage, deleteImages} from "../controller/uploadImageController.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";
import { uploadPhoto, productImgResize } from "../middleware/uploadImage.js";
const router = express.Router();

router.post(
  "/",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImage
);

router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);

export default router;