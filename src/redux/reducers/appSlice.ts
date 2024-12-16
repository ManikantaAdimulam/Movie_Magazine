import {createSlice} from '@reduxjs/toolkit';
import {Languages} from '@utils/enum/enums';

interface IAppState {
  language: string;
}

const initialState: IAppState = {
  language: Languages.en,
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    changeLanguage(state, action: {payload: string}) {
      return {...state, language: action.payload};
    },
  },
});

export const appReducer = appSlice.reducer;

export const appActions = appSlice.actions;

export default appSlice;
