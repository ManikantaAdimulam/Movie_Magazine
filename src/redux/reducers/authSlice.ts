import {createSlice} from '@reduxjs/toolkit';

//
interface IAuthState {
  email: string | null;
  password: string | null;
  isLoggedIn: boolean;
}

//
const initialState: IAuthState = {
  email: '',
  password: '',
  isLoggedIn: false,
};

//
const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    saveUserDetails(state, action) {
      const {email = null, password = null}: IAuthState = action.payload;
      return {...state, email: email, password: password, isLoggedIn: true};
    },
  },
});

export const authReducer = authSlice.reducer;

export const authActions = authSlice.actions;

export default authSlice;
