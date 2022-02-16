import { put, takeLatest } from 'redux-saga/effects';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import * as Effects from 'redux-saga/effects';
import { LoadingState } from '../../utils';
import { requestWordsFromGroup } from './sprint.api';
import { getRandomNumber } from './utils';
//import { sprintStartActions } from './sprint.slice';
import { sprintGameActions } from './sprint.slice';
import { Word } from './types';

const call: any = Effects.call;

const createNumberArr = () => {
  const numbers: Array<number | undefined> = [];

  while (numbers.length < 6) {
    const number = getRandomNumber(29);

    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }

  return numbers;
};

//создаем экшен для запроса
export const fetchSprintAction = createAction<number, string>('sprint/fetch');

//получаем функцию из экшенов
const { changeLoadingState, setWordsArray } = sprintGameActions;

function* sprintGameFetch(action: PayloadAction<number>) {
  yield put(changeLoadingState(LoadingState.Loading));

  try {
    //массив номеров страниц
    const numbers = createNumberArr();
    const words: Array<Word | undefined> = [];

    for (let i = 0; i < numbers.length; i++) {
      //получаем данные из запроса
      const { data } = yield call(requestWordsFromGroup, action.payload, numbers[i]) as Response;

      words.push(...data);
    }

    //обрабатываем полученный массив слов
    yield put(setWordsArray(words));

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
