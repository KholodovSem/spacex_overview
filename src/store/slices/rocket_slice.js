import {createSlice} from '@reduxjs/toolkit';
import {getRocketById, getRockets} from '../operations/rocket_operation';

const initialState = {
  isLoading: false,
  error: '',
  allRockets: [],
  rocketData: {
    images: [],
    name: '',
    description: '',
    wikipedia: '',
  },
};

const rocketSlice = createSlice({
  name: 'rocketSlice',
  initialState,
  extraReducers: {
    [getRockets.pending]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [getRockets.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.allRockets = [...payload];
    },
    [getRockets.rejected]: (state, {error}) => {
      state.isLoading = false;
      state.error = error.message;
    },
    [getRocketById.pending]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [getRocketById.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.rocketData.images = payload.flickr_images;
      state.rocketData.name = payload.name;
      state.rocketData.description = payload.description;
      state.rocketData.wikipedia = payload.wikipedia;
    },
    [getRocketById.rejected]: (state, {error}) => {
      state.isLoading = false;
      state.error = error.message;
    },
  },
});

export default rocketSlice.reducer;
