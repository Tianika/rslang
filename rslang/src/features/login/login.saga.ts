import { put, takeLatest } from 'redux-saga/effects';
import { Signin, User } from './types';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { requestLogin } from './login.api';
import * as Effects from 'redux-saga/effects';
import { loginActions } from './login.slice';
import { LoadingState } from '../../utils';

const call = Effects.call;

//создаем экшен для запроса
export const fetchLoginAction = createAction<User, string>('login/fetch');

//получаем функцию из экшенов
const { changeLoadingState } = loginActions;

export const saveUserData = (data: Signin) => {
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
    //получаем данные из запроса
    const { data } = yield call(requestLogin, action.payload);

    //сохраняем данные
    yield call(saveUserData, data);

    yield put(changeLoadingState(LoadingState.Success));
  } catch (error: any) {
    console.log(error.response.status);
    //добавить обработку ошибок

    //       case 403:
    //         console.log('неверный пароль');

    //       case 404:
    //         console.log('пользователь не найден');
    yield put(changeLoadingState(LoadingState.Error));
  }
}

function* loginSaga() {
  yield takeLatest(fetchLoginAction, workLoginFetch);
}

export default loginSaga;
//добавить в rootsaga
