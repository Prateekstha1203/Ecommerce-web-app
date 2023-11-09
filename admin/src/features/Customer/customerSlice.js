import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customersService from "./customersService"; 
export const getUsers = createAsyncThunk(
  "customer/all-users",
  async (thunkAPI) => {
    try {
      const response = await customersService.getUsers();
      return response;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error);
    }
  }
);


const initialState = {
  customers: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const customerSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.customers = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error.message;
      });
  },
});

export default customerSlice.reducer;
