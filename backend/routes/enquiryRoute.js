import express from "express";
import {
  createEnquiry,
  deleteEnquiry,
  getAllEnquiry,
  getSingleEnquiry,
  updateEnquiry,
} from "../controller/enquiryController.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/",  createEnquiry);
router.get("/",  getAllEnquiry);
router.get("/:enquiryId", authMiddleware, isAdmin, getSingleEnquiry);
router.put("/:enquiryId", authMiddleware, isAdmin, updateEnquiry);
router.delete("/:enquiryId", authMiddleware, isAdmin, deleteEnquiry);

export default router;
