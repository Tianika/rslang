import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from '../features/login/login.slice';
import { signupReducer } from '../features/signup/signup.slice';
import { sprintGameReducer } from '../features/sprint/sprint.slice';
import { textBookReducer } from '../features/textbook/textbook.slice';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  sprintGame: sprintGameReducer,
  textBook: textBookReducer
});

export { rootReducer };
