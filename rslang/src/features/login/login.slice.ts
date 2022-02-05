import { createAction, createSlice } from '@reduxjs/toolkit';
import { LoginState } from './types';

export enum LoadingState {
  Initial = 'Initial',
  Loading = 'Loading',
  Success = 'Success',
  Error = 'Error'
}

const initialState: LoginState = {
  email: '',
  password: '',
  loadingState: LoadingState.Initial
};

export const addEmail = createAction('EMAIL_LOGIN');
export const addPassword = createAction('PASSWORD_LOGIN');
export const loginHandler = createAction('LOGIN');

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
    changeLoadingState: (state, action) => {
      state.loadingState = action.payload;
    }
  }
});

export const loginReducer = loginSlice.reducer;

export const loginActions = loginSlice.actions;