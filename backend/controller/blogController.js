import Blog from "../models/blogModel.js";
import User from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler";
import { validMongodbId } from "../utils/validateMongodbId.js";
// import validMongodbId from "../utils/validateMongodbId.jsvalidMongodbId.js";

export const createBlog = expressAsyncHandler(async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json({ success: true, newBlog });
  } catch (error) {
    throw new Error(error);
  }
});

export const updateBlog = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.json(updatedBlog);
  } catch (error) {
    throw new Error(error);
  }
});

export const getBlog = expressAsyncHandler(async (req, res) => {
  const { id } = req.params; // Use the 'id' parameter from request params
  console.log(id);
  try {
    const getBlog = await Blog.findById(id);
    //   .populate("likes")
    //   .populate("dislikes");
    await Blog.findByIdAndUpdate(id, { $inc: { noOfViews: 1 } }, { new: true });

    res.json(getBlog);
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllBlogs = expressAsyncHandler(async (req, res) => {
  try {
    const allBlogs = await Blog.find();
    res.json({ allBlogs });
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteBlog = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBlog = await Blog.findByIdAndDelete(id);
    res.json(deleteBlog);
  } catch (error) {
    throw new Error(error);
  }
});

export const likeBlog = expressAsyncHandler(async (req, res) => {
  const { blogId } = req.body;
  console.log(blogId);
  validMongodbId(blogId);
  const loginUserId = req?.user?._id;
  try {
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const isLiked = blog.isLiked;
    const alreadyDisLiked = blog.dislikes.find(
      (userId) => userId.toString() === loginUserId.toString()
    );

    if (alreadyDisLiked) {
      await Blog.findByIdAndUpdate(blogId, {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      });
    }

    if (isLiked) {
      await Blog.findByIdAndUpdate(blogId, {
        $pull: { likes: loginUserId },
        isLiked: false,
      });
    } else {
      await Blog.findByIdAndUpdate(blogId, {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      });
    }

    // Fetch and return the updated blog after all operations
    const updatedBlog = await Blog.findById(blogId);
    res.json(updatedBlog);
  } catch (error) {
    throw new Error(error);
  }
});

export const dislikeBlog = expressAsyncHandler(async (req, res) => {
  const { blogId } = req.body;
  console.log(blogId);
  validMongodbId(blogId);
  const loginUserId = req?.user?._id;
  try {
    const blog = await Blog.findById(blogId);
    console.log(blog);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const dislikeBlog = blog.isDisliked;
    const likeBlog = blog.likes.find(
      (userId) => userId.toString() === loginUserId.toString()
    );
    if (likeBlog) {
      await Blog.findByIdAndUpdate(
        blogId,
        { $pull: { islikes: loginUserId }, isliked: false },
        { new: true }
      );
    }
    if (dislikeBlog) {
      await Blog.findByIdAndUpdate(blogId, {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      });
    } else {
      await Blog.findByIdAndUpdate(blogId, {
        $pull: { likes: loginUserId },
        isLiked: false,
      });
    }
    const updatedBlog = await Blog.findById(blogId);
    res.json(updatedBlog);
  } catch (error) {
    throw new Error(error);
  }
});
