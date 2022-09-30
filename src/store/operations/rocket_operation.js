import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRocket, getAllRockets} from '../../helpers/rocket_api';

export const getRockets = createAsyncThunk(
    'rockets/getRockets',
    async (_, {rejectWithValue}) => {
      try {
        return getAllRockets();
      } catch (error) {
        return rejectWithValue(error);
      }
    },
);

export const getRocketById = createAsyncThunk(
    'rockets/getRocketById',
    async (id, {rejectWithValue}) => {
      try {
        return getRocket(id);
      } catch (error) {
        return rejectWithValue(error);
      }
    },
);
