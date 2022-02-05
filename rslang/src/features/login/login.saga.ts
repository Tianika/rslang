import { put, takeLatest } from 'redux-saga/effects';
import { Signin, User } from './types';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { requestLogin } from './login.api';
import * as Effects from 'redux-saga/effects';
import { LoadingState, loginActions } from './login.slice';

const call: any = Effects.call;

export const fetchLoginAction = createAction<User, string>('login/fetch');
const { changeLoadingState } = loginActions;

const saveUserData = (data: Signin) => {
  const content = data;

  localStorage.rslangUserName = content.name;
  localStorage.rslangUserId = content.userId;
  localStorage.rslangUserToken = content.token;
  localStorage.rslangUserRefreshToken = content.refreshToken;

  location.href = location.origin;
};

function* workLoginFetch(action: PayloadAction<User>) {
  yield put(changeLoadingState(LoadingState.Loading));
  try {
    const { data } = yield call(requestLogin, action.payload) as Response;

    yield call(saveUserData, data);

    yield put(changeLoadingState(LoadingState.Success));
  } catch (error: any) {
    console.log(error.response.status);
    //throw new Error(String(error));
    yield put(changeLoadingState(LoadingState.Error));
  }
}

function* loginSaga() {
  yield takeLatest(fetchLoginAction, workLoginFetch);
}

export default loginSaga;
