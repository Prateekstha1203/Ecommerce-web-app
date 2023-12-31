import Category from "../models/categoryModel.js";
import expressAsyncHandler from "express-async-handler";
import { validMongodbId } from "../utils/validateMongodbId.js";

export const createCategory = expressAsyncHandler(async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.json({ newCategory });
  } catch (error) {
    throw new Error(error);
  }
});

export const updateCategory = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const newCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ newCategory });
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteCategory = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const newCategory = await Category.findByIdAndDelete(id);
    res.json({ newCategory });
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllCategory = expressAsyncHandler(async (req, res) => {
  try {
    const allCategory = await Category.find();
    res.json(allCategory);
  } catch (error) {
    throw new Error(error);
  }
});

export const getSingleCategory = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const singleCategory = await Category.findById(id);
    res.json(singleCategory);
  } catch (error) {
    throw new Error(error);
  }
});
