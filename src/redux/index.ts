import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import moviesAPI from '@services/network/api/moviesApi';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const queryMiddlewares = [moviesAPI.middleware];

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(queryMiddlewares),
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
export default store;
