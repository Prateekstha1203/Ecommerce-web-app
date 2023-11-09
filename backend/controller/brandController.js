import Brand from "../models/brandModel.js";
import expressAsyncHandler from "express-async-handler";
import { validMongodbId } from "../utils/validateMongodbId.js";

export const createBrand = expressAsyncHandler(async (req, res) => {
  try {
    const newBrand = await Brand.create(req.body);
    res.json({ newBrand });
  } catch (error) {
    throw new Error(error);
  }
});

export const updateBrand = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const newBrand = await Brand.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(newBrand)
    res.json({ newBrand });
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteBrand = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const newBrand = await Brand.findByIdAndDelete(id);
    res.json({ newBrand });
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllBrand = expressAsyncHandler(async (req, res) => {
  try {
    const allBrand = await Brand.find();
    res.json(allBrand);
  } catch (error) {
    throw new Error(error);
  }
});

export const getSingleBrand = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const singleBrand = await Brand.findById(id);
    res.json(singleBrand);
  } catch (error) {
    throw new Error(error);
  }
});
