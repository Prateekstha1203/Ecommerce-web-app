import express from "express";
import {
  createCoupon,
  deleteCoupon,
  getAllCoupon,
  getSingleCoupon,
  updateCoupon,
} from "../controller/couponController.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createCoupon);
router.get("/", authMiddleware, isAdmin, getAllCoupon);
router.get("/:couponId", authMiddleware, isAdmin, getSingleCoupon);
router.put("/:couponId", authMiddleware, isAdmin, updateCoupon);
router.delete("/:couponId", authMiddleware, isAdmin, deleteCoupon);

export default router;
