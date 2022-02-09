import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from '../features/login/login.slice';
import { signupReducer } from '../features/signup/signup.slice';
import { sprintReducer } from '../features/sprint/sprint.slice';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  sprint: sprintReducer
});

export { rootReducer };
