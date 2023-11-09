import express from "express";
import {
  createBrand,
  updateBrand,
  deleteBrand,
  getAllBrand,
  getSingleBrand,
} from "../controller/brandController.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBrand);
router.get("/", getAllBrand);
router.get("/:id", authMiddleware, isAdmin, getSingleBrand);
router.put("/:id", authMiddleware, isAdmin, updateBrand);
router.delete("/:id", authMiddleware, isAdmin, deleteBrand);

export default router;
