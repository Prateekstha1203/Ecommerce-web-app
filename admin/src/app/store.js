import authReducer from "../features/auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../features/Customer/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";
import categoryReducer from "../features/category/categorySlice";
import colorSlice from "../features/color/colorSlice";
import blogReducer from "../features/blogs/blogSlice";
import blogCategoryReducer from "../features/blogCategory/blogCategorySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
    category: categoryReducer,
    color: colorSlice,
    blog: blogReducer,
    blogCategory: blogCategoryReducer,
    
  },
});
