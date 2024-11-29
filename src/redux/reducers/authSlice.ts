import {createSlice} from '@reduxjs/toolkit';

//
interface IAuthState {
  name: string;
  password: string;
  isLoggedIn: boolean;
}

//
const initialState: IAuthState = {
  name: '',
  password: '',
  isLoggedIn: false,
};

//
const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    saveUserDetails(state, action) {
      const {name = null, password = null} = action.payload;
      return {...state, userName: name, password: password};
    },
  },
});

export const authReducer = authSlice.reducer;

export default authSlice;
