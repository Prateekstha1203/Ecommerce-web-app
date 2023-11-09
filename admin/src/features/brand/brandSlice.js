import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import brandService from './brandService';

const initialState = {
    brands: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
    };
export const getAllBrands = createAsyncThunk(
    'brand/all-brands',
    async (thunkAPI) => {
        try {
            const response = await brandService.getAllBrands();
            return response;
        } catch (error) {
            throw thunkAPI.rejectWithValue(error);
        }
    }
);

export const brandSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllBrands.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllBrands.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.brands = action.payload;
        })
        .addCase(getAllBrands.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message;
        });
    },
});

export default brandSlice.reducer;