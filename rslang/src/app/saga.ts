import { all } from 'redux-saga/effects';
import loginSaga from '../features/login/login.saga';
import signupSaga from '../features/signup/signup.saga';
import audioSaga from '../features/audio-games/audio-call.saga';

export function* rootSaga() {
  yield all([loginSaga(), signupSaga(), audioSaga()]);
}
