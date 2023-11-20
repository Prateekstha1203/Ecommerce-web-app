import productService from "./productService";
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";



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


export const createProducts = createAsyncThunk(
    "product/create-products",
    async (productData, thunkAPI) => {
      try {
        return await productService.createProduct(productData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
  export const resetState = createAction("Reset_all");


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
        })
        .addCase(createProducts.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(createProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.createdProduct = action.payload;
          })
          .addCase(createProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
          })
        
    }});

    export default productSlice.reducer;