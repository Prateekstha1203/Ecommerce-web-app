import Coupon from "../models/couponModel.js";
import expressAsyncHandler from "express-async-handler";

export const createCoupon = expressAsyncHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    res.json(newCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllCoupon = expressAsyncHandler(async (req, res) => {
  try {
    const couponList = await Coupon.find();
    res.json(couponList);
  } catch (error) {
    throw new Error(error);
  }
});

export const getSingleCoupon = expressAsyncHandler(async (req, res) => {
  const { couponId } = req.params;
  if (!couponId) throw new Error("No Coupon Found");
  try {
    const couponList = await Coupon.findById(couponId);
    res.json(couponList);
  } catch (error) {
    throw new Error(error);
  }
});

export const updateCoupon = expressAsyncHandler(async (req, res) => {
  const { couponId } = req.params;
  if (!couponId) throw new Error("No Coupon Found");
  try {
    const couponList = await Coupon.findByIdAndUpdate(couponId, req.body, {
      new: true,
    });
    res.json(couponList);
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteCoupon = expressAsyncHandler(async (req, res) => {
  const { couponId } = req.params;
  if (!couponId) throw new Error("No Coupon Found");
  try {
    const couponList = await Coupon.findByIdAndDelete(couponId);
    res.json(couponList);
  } catch (error) {
    throw new Error(error);
  }
});
