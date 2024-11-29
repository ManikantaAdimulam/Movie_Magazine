import {combineSlices} from '@reduxjs/toolkit';
import {authReducer} from '@redux/reducers/authSlice';

const rootReducer = combineSlices({
  auth: authReducer,
});

export default rootReducer;
