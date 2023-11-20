import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import enquiryService from "./enquiryService";

const initialState = {
  enquiries: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getAllEnquiry = createAsyncThunk(
  "enquiry/all-enquiry",
  async (thunkAPI) => {
    try {
      const response = await enquiryService.getAllEnquiry();
      return response;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error);
    }
  }
);

export const enquirySlice = createSlice({
  name: "enquiries",
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(getAllEnquiry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllEnquiry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.enquiries= action.payload;
      })
      .addCase(getAllEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error.message;
      });
  },
});

export default enquirySlice.reducer;
