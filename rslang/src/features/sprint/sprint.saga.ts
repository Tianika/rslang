import { all, put, takeLatest } from 'redux-saga/effects';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import * as Effects from 'redux-saga/effects';
import { LoadingState } from '../../utils';
import { requestSprintWordsFromGroup } from './sprint.api';
import { sprintGameActions } from './sprint.slice';
import { DataForFetch } from './types';
import { AxiosResponse } from 'axios';
import { requestDifficultWords } from '../wordsPage/wordsPage.api';

const call: any = Effects.call;

//создаем экшен для запроса
export const fetchSprintAction = createAction<DataForFetch, string>('sprint/fetch');

//получаем функцию из экшенов
const { changeSprintLoadingState, setSprintWordsArray } = sprintGameActions;

function* sprintGameFetch(action: PayloadAction<DataForFetch>) {
  yield put(changeSprintLoadingState(LoadingState.Loading));

  try {
    //массив номеров страниц
    const props: DataForFetch = action.payload;
    const requests: Array<AxiosResponse | undefined> = [];

    const numbers = props.pages;
    const level = props.level;

    if (level === 6) {
      const { data } = yield call(requestDifficultWords);

      //обрабатываем полученный массив слов
      yield put(setSprintWordsArray(data[0].paginatedResults));
    } else {
      for (let i = 0; i < numbers.length; i += 1) {
        // создаем запросы

        requests[i] = call(requestSprintWordsFromGroup, level, numbers[i]) as AxiosResponse;
      }

      const [...wordsResponse] = yield all(requests);
      const words = wordsResponse.map((resp: AxiosResponse) => resp.data).flat();

      //обрабатываем полученный массив слов
      yield put(setSprintWordsArray(words));
    }

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
