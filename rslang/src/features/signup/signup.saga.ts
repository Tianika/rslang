import { put, takeLatest } from 'redux-saga/effects';
import { NewUser } from './types';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import * as Effects from 'redux-saga/effects';
import { signupActions } from './signup.slice';
import { requestSignup } from './signup.api';
import { LoadingState } from '../../utils';
import { requestLogin } from '../login/login.api';
import { saveUserData } from '../login/login.saga';
import { User } from '../login/types';

const call: any = Effects.call;

//создаем экшен для запроса
export const fetchSignupAction = createAction<NewUser, string>('signup/fetch');

//получаем функцию для отслеживания статуса загрузки
const { changeLoadingState } = signupActions;

function* workSignupFetch(action: PayloadAction<NewUser>) {
  yield put(changeLoadingState(LoadingState.Loading));

  try {
    //запрос на регистрацию
    yield call(requestSignup, action.payload) as Response;

    const user: User = {
      email: action.payload.email,
      password: action.payload.password
    };

    //автологин нового пользолвателя
    const { data } = yield call(requestLogin, user) as Response;

    //обработка данных
    yield call(saveUserData, data);

    yield put(changeLoadingState(LoadingState.Success));
  } catch (error: any) {
    yield put(changeLoadingState(LoadingState.Error));
  }
}

function* signupSaga() {
  yield takeLatest(fetchSignupAction, workSignupFetch);
}

export default signupSaga;
//добавить в saga.ts
