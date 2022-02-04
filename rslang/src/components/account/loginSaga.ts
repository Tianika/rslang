import { call, put, takeEvery } from 'redux-saga/effects';
import { loginReducer } from './loginState';
import { Signin } from './types';

function* workLoginFetch() {
  try {
    const login: Signin = yield call(() =>
      fetch('https://learnwords-team17.herokuapp.com/signin', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginReducer)
      })
    );

    yield put({ type: 'LOGIN_SUCCESS', login });
  } catch (error) {
    yield put({ type: 'LOGIN_FALED', error });
  }
}

function* loginSaga() {
  yield takeEvery('LOGIN_FETCH', workLoginFetch);
}

export default loginSaga;
