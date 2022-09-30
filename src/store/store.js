import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rocketReducer from './slices/rocket_slice';
import userReducer from './slices/user_slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const userPersistConfig = {
  key: 'user',
  storage,
};

const userPersistedReducer = persistReducer(userPersistConfig, userReducer);

const rocketsPersistConfig = {
  key: 'rockets',
  storage,
  whitelist: ['allRockets', 'rocketData'],
};

const rocketsPersistedReducer = persistReducer(
    rocketsPersistConfig,
    rocketReducer,
);

export const store = configureStore({
  reducer: {
    user: userPersistedReducer,
    rockets: rocketsPersistedReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
