import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import blogService from './blogService';

const initialState = {
    blogs: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
    };
export const getAllBlogs = createAsyncThunk(
    'blog/all-blogs',
    async (thunkAPI) => {
        try {
            const response = await blogService.getAllBlogs();
            return response;
        } catch (error) {
            throw thunkAPI.rejectWithValue(error);
        }
    }
);

export const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllBlogs.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllBlogs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.blogs = action.payload;
        })
        .addCase(getAllBlogs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message;
        });
    },
}); 

export default blogSlice.reducer;