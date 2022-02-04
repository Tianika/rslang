import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from '../components/account/loginState';

const rootReducer = combineReducers({
  login: loginReducer
});

export { rootReducer };
