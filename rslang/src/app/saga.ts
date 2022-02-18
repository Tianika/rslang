import { all } from 'redux-saga/effects';
import loginSaga from '../features/login/login.saga';
import signupSaga from '../features/signup/signup.saga';
//import sprintSaga from '../features/sprint/sprint.saga';

export function* rootSaga() {
  yield all([loginSaga(), signupSaga(), sprintSaga()]);
}
