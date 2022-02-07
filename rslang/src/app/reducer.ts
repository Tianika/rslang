import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from '../features/login/login.slice';
import { signupReducer } from '../features/signup/signup.slice';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer
});

export { rootReducer };
