import {combineSlices} from '@reduxjs/toolkit';
import {authReducer} from '@redux/reducers/authSlice';
import moviesAPI from '@services/network/api/moviesApi';
const apiReducers = {
  [moviesAPI.reducerPath]: moviesAPI.reducer,
};
const rootReducer = combineSlices({
  auth: authReducer,
  ...apiReducers,
});

export default rootReducer;
