import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from '../features/login/login.slice';
import { signupReducer } from '../features/signup/signup.slice';
import { sprintGameReducer } from '../features/sprint/sprint.slice';
import { wordsPageReducer } from '../features/wordsPage/wordsPage.slice';
import { audioGameReducer } from '../features/audio-games/audio-call.slice';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  sprintGame: sprintGameReducer,
  wordsPage: wordsPageReducer,
  audioGame: audioGameReducer
});

export { rootReducer };
