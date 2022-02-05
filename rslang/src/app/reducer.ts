import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from '../features/login/login.slice';

const rootReducer = combineReducers({
  login: loginReducer
});

export { rootReducer };
