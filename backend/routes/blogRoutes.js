import express from "express";

import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";
import {
  createBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  blogImageUploader,
} from "../controller/blogController.js";
import { blogImgResize, uploadPhoto } from "../middleware/uploadImage.js";
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBlog);
router.put("/dislikes", authMiddleware, dislikeBlog);
router.put("/likes", authMiddleware, likeBlog);
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  blogImgResize,
  blogImageUploader
);

router.put("/:id", authMiddleware, isAdmin, updateBlog);
router.get("/:id", getBlog);
router.get("/" , getAllBlogs);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);
export default router;
