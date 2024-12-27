import {combineSlices} from '@reduxjs/toolkit';
import {authReducer} from '@redux/reducers/authSlice';
import moviesAPI from '@services/network/api/moviesApi';
import {appReducer} from './appSlice';

const apiReducers = {
  [moviesAPI.reducerPath]: moviesAPI.reducer,
};

const rootReducer = combineSlices({
  auth: authReducer,
  app: appReducer,
  ...apiReducers,
});

export default rootReducer;
