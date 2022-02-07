import { createAction, createSlice } from '@reduxjs/toolkit';
import { LoadingState } from '../../utils';
import { LoginState } from './types';

const initialState: LoginState = {
  email: '',
  password: '',
  loadingState: LoadingState.Initial
};

//создаем экшены
export const addEmail = createAction('EMAIL_LOGIN');
export const addPassword = createAction('PASSWORD_LOGIN');
export const loginHandler = createAction('LOGIN');

//создаем редюсеры
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
//добавить loginReducer в reducer.ts

export const loginActions = loginSlice.actions;
