import { createAction, createReducer } from '@reduxjs/toolkit';

import loginSaga from './loginSaga';

const initialState = {
  email: '',
  password: ''
};

export const addEmail = createAction('EMAIL_LOGIN');
export const addPassword = createAction('PASSWORD_LOGIN');
export const loginHandler = createAction('LOGIN');

export const loginReducer = createReducer(initialState, {
  [addEmail.type]: (state, action) => {
    state.email = action.payload.email;
    console.log(state);
  },
  [addPassword.type]: (state, action) => {
    state.password = action.payload.password;
    console.log(state);
  },
  [loginHandler.type]: () => {
    const loginData = loginSaga();
    console.log(loginData);
  }
});

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'EMAIL':
//       return (state.email = action.payload.email);
//   }
// };

// store.dispatch(addEmail);

//const loginActions = (type) => store.dispatch({ type });

// export const loginSlice = createSlice({
//   name: 'login',
//   initialState,
//   reducers: {
//     loginUserData: (state, action) => {
//       state.email = action.payload.email;
//       state.password = action.payload.password;
//     },
//     loginFetch: () => {}
//   }
// });

// export const { loginUserData, loginFetch } = loginSlice.actions;

// export default loginSlice.reducer;
