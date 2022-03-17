import { put, takeLatest } from 'redux-saga/effects';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import * as Effects from 'redux-saga/effects';
import { LoadingState } from '../../utils';
import { requestSprintWordsFromGroup } from './sprint.api';
import { sprintGameActions } from './sprint.slice';
import { DataForFetch, Word } from './types';

const call: any = Effects.call;

//создаем экшен для запроса
export const fetchSprintAction = createAction<DataForFetch, string>('sprint/fetch');

//получаем функцию из экшенов
const { changeSprintLoadingState, setSprintWordsArray } = sprintGameActions;

function* sprintGameFetch(action: PayloadAction<DataForFetch>) {
  yield put(changeSprintLoadingState(LoadingState.Loading));

  try {
    //массив номеров страниц
    const words: Array<Word | undefined> = [];
    const props: DataForFetch = action.payload;

    const numbers = props.pages;
    const level = props.level;

    for (let i = 0; i < numbers.length; i += 1) {
      //получаем данные из запроса
      const { data } = yield call(requestSprintWordsFromGroup, level, numbers[i]) as Response;

      words.push(...data);
    }

    //обрабатываем полученный массив слов
    yield put(setSprintWordsArray(words));

    yield put(changeSprintLoadingState(LoadingState.Success));
  } catch (error: any) {
    yield put(changeSprintLoadingState(LoadingState.Error));
  }
}

function* sprintSaga() {
  yield takeLatest(fetchSprintAction, sprintGameFetch);
}

export default sprintSaga;
//добавить в rootsaga
