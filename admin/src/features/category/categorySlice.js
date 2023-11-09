import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'; 
import categoryService from './categoryService';

const initialState = {
    categories: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
    };

export const getAllCategories = createAsyncThunk(
    'category/all-categories',
    async (thunkAPI) => {
        try {
            const response = await categoryService.getAllCategories();
            console.log(response);
            return response;
        } catch (error) {
            throw thunkAPI.rejectWithValue(error);
        }
    }
);

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllCategories.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.categories = action.payload;
        })
        .addCase(getAllCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message;
        });
    },
});

export default categorySlice.reducer;   