import {createSlice} from '@reduxjs/toolkit';
import {
  handleRegistration,
  handleLogin,
  handleLogout,
  handleUpdateProfile,
  handleUpdateEmail,
  handleUpdatePassword,
  handleAddToFavorit,
  handleRemoveFromFavorit,
  handleCurrentFavoritList,
} from 'store/operations/user_operations';

const initialState = {
  isLogin: false,
  isLoading: false,
  error: '',
  userData: {},
  favorits: [],
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  extraReducers: {
    [handleRegistration.pending]: (state) => {
      state.isLoading = true;
    },
    [handleRegistration.fulfilled]: (state, {payload}) => {
      state.isLogin = true;
      state.isLoading = false;
      state.userData = {...payload};
    },
    [handleRegistration.rejected]: (state) => {
      state.isLoading = false;
    },
    [handleLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [handleLogin.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.isLogin = true;
      state.userData = {...payload};
    },
    [handleLogin.rejected]: (state) => {
      state.isLoading = false;
    },
    [handleLogout.pending]: (state) => {
      state.isLoading = true;
    },
    [handleLogout.fulfilled]: (state) => {
      state.isLogin = false;
      state.isLoading = false;
      state.error = '';
      state.userData = {};
      state.favorits = [];
    },
    [handleLogout.rejected]: (state) => {
      state.isLoading = false;
    },
    [handleUpdateProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [handleUpdateProfile.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.userData.displayName = payload;
    },
    [handleUpdateProfile.rejected]: (state) => {
      state.isLoading = false;
    },
    [handleUpdateEmail.pending]: (state) => {
      state.isLoading = true;
    },
    [handleUpdateEmail.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.userData.email = payload.email;
    },
    [handleUpdateEmail.rejected]: (state) => {
      state.isLoading = false;
    },
    [handleUpdatePassword.pending]: (state) => {
      state.isLoading = true;
    },
    [handleUpdatePassword.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [handleUpdatePassword.rejected]: (state, {payload}) => {
      state.isLoading = false;
      state.error = payload;
    },
    [handleAddToFavorit.pending]: (state) => {
      state.isLoading = true;
    },
    [handleAddToFavorit.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.favorits = [...payload];
    },
    [handleAddToFavorit.rejected]: (state) => {
      state.isLoading = false;
    },
    [handleRemoveFromFavorit.pending]: (state) => {
      state.isLoading = true;
    },
    [handleRemoveFromFavorit.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.favorits = [...payload];
    },
    [handleRemoveFromFavorit.rejected]: (state) => {
      state.isLoading = false;
    },
    [handleCurrentFavoritList.pending]: (state) => {
      state.isLoading = true;
    },
    [handleCurrentFavoritList.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.favorits = [...payload];
    },
    [handleCurrentFavoritList.pending]: (state) => {
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;
