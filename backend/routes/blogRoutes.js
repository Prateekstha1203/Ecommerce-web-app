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
} from "../controller/blogController.js";
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBlog);
router.put("/dislikes", authMiddleware, dislikeBlog);
router.put("/likes", authMiddleware, likeBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);
router.get("/:id", authMiddleware, isAdmin, getBlog);
router.get("/", authMiddleware, isAdmin, getAllBlogs);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);
export default router;
