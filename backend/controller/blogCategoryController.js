import BlogCategory from "../models/blogCategoryModel.js";
import expressAsyncHandler from "express-async-handler";
import { validMongodbId } from "../utils/validateMongodbId.js";

export const createCategory = expressAsyncHandler(async (req, res) => {
  try {
    const newCategory = await BlogCategory.create(req.body);
    res.json({ newCategory });
  } catch (error) {
    throw new Error(error);
  }
});

export const updateCategory = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const newCategory = await BlogCategory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(newCategory)
    res.json({ newCategory });
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteCategory = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const newCategory = await BlogCategory.findByIdAndDelete(id);
    res.json({ newCategory });
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllCategory = expressAsyncHandler(async (req, res) => {
  try {
    const allCategory = await BlogCategory.find();
    res.json(allCategory);
  } catch (error) {
    throw new Error(error);
  }
});

export const getSingleCategory = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const singleCategory = await BlogCategory.findById(id);
    res.json(singleCategory);
  } catch (error) {
    throw new Error(error);
  }
});
