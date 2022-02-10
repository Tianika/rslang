import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from '../features/login/login.slice';
import { signupReducer } from '../features/signup/signup.slice';
import { sprintGameReducer } from '../features/sprint/game.slice';
import { sprintStartReducer } from '../features/sprint/sprint.slice';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  sprint: sprintStartReducer,
  sprintGame: sprintGameReducer
});

export { rootReducer };
