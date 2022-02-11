import { put, takeLatest } from 'redux-saga/effects';
import { textBookActions } from './textbook.slice';

import { createAction, PayloadAction } from '@reduxjs/toolkit';
import * as Effects from 'redux-saga/effects';
import { LoadingState } from '../../utils';
import { requestWords } from './textbook.api';

const call: any = Effects.call;

//создаем экшен для запроса
export const fetchTextBookAction = createAction<{ group: string; page: string }, string>(
  'textbook/fetch'
);
// export const fetchTextBookAction = createAction()

//получаем функцию из экшенов
const { changeLoadingState, setWords } = textBookActions;

function* fetchTextBookSaga(action: PayloadAction<{ group: string; page: string }>) {
  yield put(changeLoadingState(LoadingState.Loading));

  try {
    //получаем данные из запроса
    const { data } = yield call(
      requestWords,
      action.payload.group,
      action.payload.page
    ) as Response;

    //сохраняем данные
    yield put(setWords(data));
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

function* textBookSaga() {
  yield takeLatest(fetchTextBookAction, fetchTextBookSaga);
}

export { textBookSaga };
//добавить в rootsaga
