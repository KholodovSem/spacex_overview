import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  signIn,
  signUp,
  logout,
  updateUserEmail,
  updateUserPassword,
  updateUserProfile,
  addNewDoc,
  addToDoc,
  removeFromDoc,
  getUserDoc,
} from 'firebase.js';
import {toast} from 'react-toastify';

export const handleRegistration = createAsyncThunk(
    'user/registration',
    async ({email, password, displayName}, {rejectWithValue}) => {
      try {
        const result = (await signUp(email, password, displayName)).user;
        await addNewDoc(email);
        return {
          displayName,
          email: result.email,
          phoneNumber: result.phoneNumber,
          photoURL: result.photoURL,
          uid: result.uid,
        };
      } catch (error) {
        toast.error(error.message);
        return rejectWithValue(error.message);
      }
    },
);

export const handleLogin = createAsyncThunk(
    'user/login',
    async ({email, password}, {rejectWithValue}) => {
      try {
        const result = await signIn(email, password);
        const {user} = result;
        return {
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          uid: user.uid,
        };
      } catch (error) {
        toast.error(error.message);
        return rejectWithValue(error.message);
      }
    },
);

export const handleLogout = createAsyncThunk(
    'user/logout',
    async (_, rejectWithValue) => {
      try {
        await logout();
      } catch (error) {
        toast.error(error.message);
        return rejectWithValue(error.message);
      }
    },
);

export const handleUpdateProfile = createAsyncThunk(
    'user/updateProfile',
    async (displayName, {rejectWithValue}) => {
      try {
        await updateUserProfile(displayName);
        toast.success('Name successfully changed');
        return displayName;
      } catch (error) {
        toast.error(error.message);
        return rejectWithValue(error.message);
      }
    },
);

export const handleUpdateEmail = createAsyncThunk(
    'user/updateEmail',
    async (email, {rejectWithValue}) => {
      try {
        await updateUserEmail(email);
        toast.success('Email successfully changed');
        return email;
      } catch (error) {
        toast.error(error.message);
        return rejectWithValue(error.message);
      }
    },
);

export const handleUpdatePassword = createAsyncThunk(
    'user/updatePassword',
    async (password, {rejectWithValue}) => {
      try {
        await updateUserPassword(password);
        toast.success('Password successfully changed');
        return password;
      } catch (error) {
        if (error.message === 'Firebase: Error (auth/requires-recent-login).') {
          toast.error('Please sign in again');
          return rejectWithValue(error.code);
        }
        toast.error(error.message);
        return rejectWithValue(error.message);
      }
    },
);

export const handleAddToFavorit = createAsyncThunk(
    'user/addToFavorit',
    async ({email, newFavorit}, {rejectWithValue}) => {
      try {
        const result = await addToDoc(email, newFavorit);
        return result;
      } catch (error) {
        toast.error(error.message);
        return rejectWithValue(error.message);
      }
    },
);

export const handleRemoveFromFavorit = createAsyncThunk(
    'user/removeFromFavorit',
    async ({email, id}, {rejectWithValue}) => {
      try {
        const result = await removeFromDoc(email, id);
        return result;
      } catch (error) {
        toast.error(error.message);
        return rejectWithValue(error.message);
      }
    },
);

export const handleCurrentFavoritList = createAsyncThunk(
    'user/getCurrentFavoritList',
    async (email, {rejectWithValue}) => {
      try {
        const result = await getUserDoc(email);
        return result;
      } catch (error) {
        toast.error(error.message);
        return rejectWithValue(error.message);
      }
    },
);
