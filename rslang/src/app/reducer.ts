import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from '../features/login/login.slice';
import { signupReducer } from '../features/signup/signup.slice';
import { textBookReducer } from '../features/textbook/textbook.slice';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  textBook: textBookReducer
});

export { rootReducer };
