import { query } from "express";
import Product from "../models/productModel.js";
import expressAsyncHandler from "express-async-handler";
import slugify from "slugify";
import User from "../models/userModel.js";
import { validMongodbId } from "../utils/validateMongodbId.js";
import { cloudinaryUploadImg } from "../utils/cloudinary.js";
export const createProduct = expressAsyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});

export const getaProduct = expressAsyncHandler(async (req, res) => {
  const { productId } = req.params;
  console.log(productId);
  try {
    const findProduct = await Product.findById(productId);
    res.json(findProduct);
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllProduct = expressAsyncHandler(async (req, res) => {
  try {
    // const allProduct = await Product.find({
    //   brand: req.query.brand,
    //   name: req.query.name,
    //   slug: req.query.slug,
    // });
    const queryObj = { ...req.query };
    const executableObj = ["page", "sort", "limit", "fields"];
    executableObj.forEach((eObj) => delete queryObj[eObj]);
    console.log(queryObj);
    let queryString = JSON.stringify(queryObj);
    console.log(JSON.parse(queryString));
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );
    let query = Product.find(JSON.parse(queryString));
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    }

    if (req.query.page) {
      const page = req.query.page;
      const limit = req.query.limit;
      const skip = (page - 1) * limit;
      query = query.skip(skip).limit(limit);
      const numberCount = await Product.countDocuments();
      if (skip >= numberCount) throw new Error("Page not exist");
    }
    const product = await query;
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

export const updateProduct = expressAsyncHandler(async (req, res) => {
  const { _id } = req.params;
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const updateProduct = await Product.findOneAndUpdate(_id, req.body, {
      new: true,
    });
    res.json({ updateProduct, message: "Hey" });
  } catch (err) {
    throw new Error(err);
  }
});

export const deleteProduct = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (deletedProduct) {
      res.json({ message: "Product deleted successfully", deletedProduct });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting product", error: err.message });
  }
});

export const addWishlist = expressAsyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { prodId } = req.body;
  try {
    const user = await User.findById(_id);
    const alreadyExist = await user?.wishlist.find(
      (id) => id.toString() === prodId.toString()
    );
    if (alreadyExist) {
      let userData = await User.findByIdAndUpdate(
        _id,
        { $pull: { wishlist: prodId } },
        { new: true }
      );
      res.json(userData);
    } else {
      let userData = await User.findByIdAndUpdate(
        _id,
        {
          $push: { wishlist: prodId },
        },
        { new: true }
      );
      res.json(userData);
    }
  } catch (error) {
    throw new Error(error);
  }
});

export const rating = expressAsyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { prodId, star } = req.body;
  try {
    const product = await Product.findById(prodId);
    if (!product) {
      throw new Error("Product does not exist");
    }

    const alreadyExist = product?.rating.find(
      (rating) => rating.postedBy.toString() === _id.toString()
    );

    if (alreadyExist) {
      const userData = await Product.findOneAndUpdate(
        { rating: { $elemMatch: { postedBy: _id } } },
        { $set: { "rating.$.star": star } },
        { new: true }
      );
    } else {
      const userData = await Product.findByIdAndUpdate(
        prodId,
        {
          $push: { rating: { postedBy: _id, star } },
        },
        { new: true }
      );
    }
    const getAllRating = await Product.findById(prodId);
    let totalRating = getAllRating.rating.length;
    let ratingSum = getAllRating.rating
      .map((item) => item.star)
      .reduce((prev, curr) => prev + curr, 0);
    let actualRating = Math.round(ratingSum / totalRating);
    const finalProduct = await Product.findByIdAndUpdate(
      prodId,
      { totalRating: actualRating },
      { new: true }
    );
    res.json(finalProduct);
  } catch (error) {
    throw new Error(error);
  }
});

export const uploadImage = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id)
   validMongodbId(id);
  try {
    const uploader = (path) => cloudinaryUploadImg(path, "images");
    const urls = [];
    const files = req.files
    for (const file of files) {
      console.log(files)
      const { path } = file;
      
      const newPath = await uploader(path);
      urls.push(newPath)
    }
    const findProduct = await Product.findByIdAndUpdate(
      id,
      {
        images: urls.map((file) => {
          console.log(file)
          return file;
        }),
      },
      { new: true }
    );
    res.json(findProduct)
  } catch (error) {
    throw new Error(error);
  }
});
