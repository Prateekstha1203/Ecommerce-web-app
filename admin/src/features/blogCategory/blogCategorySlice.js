import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blofCategoryService from "./blogCategoryService";

const initialState = {
  blogCategories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getAllBlogsCategory= createAsyncThunk(
  "blogCategory/all-blogs",
  async (thunkAPI) => {
    try {
      const response = await blofCategoryService.getAllBlogsCategory();
      return response;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error);
    }
  }
);

export const blogCategorySlice = createSlice({
  name: "blogCategories",
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogsCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBlogsCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogCategories = action.payload;
      })
      .addCase(getAllBlogsCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error.message;
      });
  },
});

export default blogCategorySlice.reducer;   