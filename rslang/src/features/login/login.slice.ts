import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

import loginSaga from './login.saga';
import { LoginState, User } from './types';

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

// export const loginReducer = createReducer(initialState, {
//   [addEmail.type]: (state, action) => {
//     state.email = action.payload.email;
//     console.log(state);
//   },
//   [addPassword.type]: (state, action) => {
//     state.password = action.payload.password;
//     console.log(state);
//   },
//   [loginHandler.type]: () => {
//     const loginData = loginSaga();
//     console.log(loginData);
//   }
// });

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'EMAIL':
//       return (state.email = action.payload.email);
//   }
// };

// store.dispatch(addEmail);

//const loginActions = (type) => store.dispatch({ type });

// export const { loginUserData, loginFetch } = loginSlice.actions;

// export default loginSlice.reducer;
