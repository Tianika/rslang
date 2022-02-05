import { put, takeLatest } from 'redux-saga/effects';
import { NewUser } from './types';
import { createAction, PayloadAction } from '@reduxjs/toolkit';

import * as Effects from 'redux-saga/effects';
import { LoadingState, signupActions } from './signup.slice';
import { requestSignup } from './signup.api';

const call: any = Effects.call;

export const fetchSignupAction = createAction<NewUser, string>('signup/fetch');
const { changeLoadingState } = signupActions;

const saveUserData = (data: NewUser) => {
  const content = data;

  //нужно залогиниться с данными юзера, новый запрос?

  location.href = location.origin;
};

function* workSignupFetch(action: PayloadAction<NewUser>) {
  yield put(changeLoadingState(LoadingState.Loading));
  try {
    const { data } = yield call(requestSignup, action.payload) as Response;

    yield call(saveUserData, data);

    yield put(changeLoadingState(LoadingState.Success));
  } catch (error: any) {
    console.log(error.response.status);
    //throw new Error(String(error));
    yield put(changeLoadingState(LoadingState.Error));
  }
}

function* loginSaga() {
  yield takeLatest(fetchSignupAction, workSignupFetch);
}

export default loginSaga;
