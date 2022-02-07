import { createAction, createSlice } from '@reduxjs/toolkit';
import { LoadingState } from '../../utils';
import { SignupState } from './types';

const initialState: SignupState = {
  name: '',
  email: '',
  password: '',
  loadingState: LoadingState.Initial
};

export const addName = createAction('NAME_SIGNUP');
export const addEmail = createAction('EMAIL_SIGNUP');
export const addPassword = createAction('PASSWORD_SIGNUP');
export const signupHandler = createAction('SIGNUP');

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
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

export const signupReducer = signupSlice.reducer;

export const signupActions = signupSlice.actions;
