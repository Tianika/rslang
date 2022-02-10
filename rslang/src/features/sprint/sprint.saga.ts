import { put, takeLatest } from 'redux-saga/effects';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import * as Effects from 'redux-saga/effects';
import { LoadingState } from '../../utils';
import { sprintActions } from './sprint.slice';
import { Word } from './types';
import { requestWordsFromGroup } from './sprint.api';
import { getRandomNumber } from './utils';

const call: any = Effects.call;

//создаем экшен для запроса
export const fetchSprintAction = createAction<number, string>('sprint/fetch');

//получаем функцию из экшенов
const { changeLoadingState } = sprintActions;

export const receviedWordsHandler = (data: Word[]) => {
  console.log(data);
};

function* sprintGameFetch(action: PayloadAction<number>) {
  yield put(changeLoadingState(LoadingState.Loading));

  try {
    //рандомный номер страницы
    const pageNumber = getRandomNumber(30);

    //получаем данные из запроса
    const { data } = yield call(requestWordsFromGroup, action.payload, pageNumber) as Response;

    //обрабатываем полученный массив слов
    yield call(receviedWordsHandler, data);

    //TODO доделать loading

    yield put(changeLoadingState(LoadingState.Success));
  } catch (error: any) {
    console.log(error.response.status);
    //TODO добавить обработку ошибок???

    yield put(changeLoadingState(LoadingState.Error));
  }
}

function* sprintSaga() {
  yield takeLatest(fetchSprintAction, sprintGameFetch);
}

export default sprintSaga;
//добавить в rootsaga
