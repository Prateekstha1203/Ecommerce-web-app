import {createSlice, createAsyncThunk, createAction} from '@reduxjs/toolkit'; 
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
            const response = await colorService.getAllColor();
            console.log(response);
            return response;
        } catch (error) {
            throw thunkAPI.rejectWithValue(error);
        }
    }
);

export const createColor = createAsyncThunk(
    "color/create-color",
    async (colorData, thunkAPI) => {
      try {
        return await colorService.createColor(colorData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const resetState = createAction("Reset_all");

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
        }) 
        .addCase(createColor.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(createColor.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.createdColor = action.payload;
          })
          .addCase(createColor.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
          })
    },
});

export default colorSlice.reducer;   