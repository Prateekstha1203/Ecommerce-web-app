import productService from "./productService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    };


export const getAllProducts = createAsyncThunk("product/getAllProducts", async () => {
  const response = await productService.getProducts();
  console.log(response);
  return response;
}   );

export const productSlice = createSlice({
    name:"product",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.products = action.payload;
            state.message = "success";
        })
        .addCase(getAllProducts.rejected, (state, action) => {
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            state.isLoading = false;
        });
        
    }});

    export default productSlice.reducer;