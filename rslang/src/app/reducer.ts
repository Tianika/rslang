import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from '../features/login/login.slice';
import { signupReducer } from '../features/signup/signup.slice';
import { audioGameReducer } from '../features/audio-games/audio-call.slice';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  audioGame: audioGameReducer
});

export { rootReducer };
