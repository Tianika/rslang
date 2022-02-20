import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from '../features/login/login.slice';
import { signupReducer } from '../features/signup/signup.slice';
import { sprintGameReducer } from '../features/sprint/sprint.slice';
import { textBookReducer } from '../features/textbook/textbook.slice';
import { wordsPageReducer } from '../features/wordsPage/wordsPage.slice';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  sprintGame: sprintGameReducer,
  textBook: textBookReducer,
  wordsPage: wordsPageReducer
});

export { rootReducer };
