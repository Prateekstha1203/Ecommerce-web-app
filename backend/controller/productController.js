import { query } from "express";
import Product from "../models/productModel.js";
import expressAsyncHandler from "express-async-handler";
import slugify from "slugify";
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

// export const getAllProduct = expressAsyncHandler(async (req, res) => {
//   try {
//     const queryParams = { ...req.query };
//     const removableObject = ["page", "limit", "sort", "field"];
//     removableObject.forEach((object) => delete queryParams[object]);

//     let queryString = JSON.stringify(queryParams);
//     queryString = queryString.replace(
//       /\b(gte|gt|lt|lte)\b/g,
//       (match) => `$${match}`
//     );
//     let query = Product.find(JSON.parse(queryString));

//     if (req.query.sort) {
//       const sortBy = req.query.sort.split(",").join(" ");
//       query = query.sort(sortBy);
//     } else {
//       query = query.sort("-createdAt");
//     }
//     if (req.query.field) {
//       const fields = req.query.field.split(",").join(" ");
//       query = query.select("__v " + fields); // Include '__v' along with specified fields
//     } else {
//       query = query.select("__v"); // Only '__v'
//     }

//     let product = await query;
//     console.log(product); // Log the product array, not the query

//     res.json(product); // Send the product array as the response
//   } catch (error) {
//     throw new Error(error);
//   }
// });

// export const getAllProduct = expressAsyncHandler(async (req, res) => {
//   try {
//     const queryObj = { ...req.query };
//     const executableObj = ["page", "sort", "limit", "fields"];
//     executableObj.forEach((eObj) => delete queryObj[eObj]);

//     console.log("Modified query object:", queryObj);

//     let queryString = JSON.stringify(queryObj);
//     console.log("Modified query string:", queryString);

//     queryString = queryString.replace(
//       /\b(gte|gt|lte|lt)\b/g,
//       (match) => `$${match}`
//     );
//     console.log("Final query string:", queryString);

//     const query = Product.find(JSON.parse(queryString));
//     console.log("MongoDB query:", query.getFilter());

//     const products = await query.exec();
//     console.log("Products found:", products);

//     res.json(products);
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Error fetching products", error: error.message });
//   }
// });

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
