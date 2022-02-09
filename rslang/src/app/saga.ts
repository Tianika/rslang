import { all } from 'redux-saga/effects';
import loginSaga from '../features/login/login.saga';
import signupSaga from '../features/signup/signup.saga';
import { textBookSaga } from '../features/textbook/textbook.saga';

export function* rootSaga() {
  yield all([loginSaga(), signupSaga(), textBookSaga()]);
}
