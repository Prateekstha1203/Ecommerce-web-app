import Color  from "../models/colorModel.js";
import expressAsyncHandler from "express-async-handler";

import { validMongodbId } from "../utils/validateMongodbId.js";

export const createColor = expressAsyncHandler(async (req, res) => {
  try {
    const newColor = await Color.create(req.body);
    res.json(newColor);
  } catch (error) {
    throw new Error(error);
  }
});
export const updateColor = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  validMongodbId(id);
  try {
    const updatedColor = await Color.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedColor);
  } catch (error) {
    throw new Error(error);
  }
});
export const deleteColor = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  validMongodbId(id);
  try {
    const deletedColor = await Color.findByIdAndDelete(id);
    res.json(deletedColor);
  } catch (error) {
    throw new Error(error);
  }
});
export const getColor = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  validMongodbId(id);
  try {
    const getaColor = await Color.findById(id);
    res.json(getaColor);
  } catch (error) {
    throw new Error(error);
  }
});
export const getallColor = expressAsyncHandler(async (req, res) => {
  try {
    const getallColor = await Color.find();
    res.json(getallColor);
  } catch (error) {
    throw new Error(error);
  }
});
