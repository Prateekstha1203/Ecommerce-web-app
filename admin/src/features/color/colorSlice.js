import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'; 
import colorService from './colorService';

const initialState = {
    colors: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
    };

export const getAllColors = createAsyncThunk(
    'color/all-Colors',
    async (thunkAPI) => {
        try {
            const response = await colorService.getAllColors();
            console.log(response);
            return response;
        } catch (error) {
            throw thunkAPI.rejectWithValue(error);
        }
    }
);

export const colorSlice = createSlice({
    name: 'colors',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllColors.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllColors.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.colors = action.payload;
        })
        .addCase(getAllColors.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message;
        });
    },
});

export default colorSlice.reducer;   