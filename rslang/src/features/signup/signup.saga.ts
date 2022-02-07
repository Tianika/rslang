import { put, takeLatest } from 'redux-saga/effects';
import { NewUser } from './types';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import * as Effects from 'redux-saga/effects';
import { signupActions } from './signup.slice';
import { requestSignup } from './signup.api';
import { LoadingState } from '../../utils';

const call: any = Effects.call;

export const fetchSignupAction = createAction<NewUser, string>('signup/fetch');
const { changeLoadingState } = signupActions;

const saveUserData = (data: NewUser) => {
  console.log(data);
  //нужно залогиниться с данными юзера, добавить запрос

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
    //добавить обработчик ошибок

    //throw new Error(String(error));
    //       case 417:
    //         console.log('пользователь уже есть в базе');

    //       case 422:
    //         console.log('некорректный логин или пароль');
    yield put(changeLoadingState(LoadingState.Error));
  }
}

function* signupSaga() {
  yield takeLatest(fetchSignupAction, workSignupFetch);
}

export default signupSaga;
