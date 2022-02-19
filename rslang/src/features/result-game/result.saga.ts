import * as Effects from 'redux-saga/effects';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { ResultGame } from './types';
import { getStatisticsRequest, putStatisticsRequest } from './result.api';
import { takeLatest } from 'redux-saga/effects';

//создаем экшен для запроса
export const fetchGetStatisticsAction = createAction<ResultGame, string>('getStatistics/fetch');

function* workGetStatisticsFetch(action: PayloadAction<ResultGame>) {
  const call: any = Effects.call;

  console.log(action.payload);
  const result = { ...action.payload };

  try {
    //запрос на получение статистики
    const { data } = yield call(getStatisticsRequest);

    //обработать данные

    const newData = { ...data };
    newData.learnedWords += result.rightAnswers.length;

    console.log('newData', newData);

    //отправить на сервер
    yield call(putStatisticsRequest, newData);
  } catch (error: any) {
    console.log(error.response.status);
    if (error.response.status === '404') {
      yield call(putStatisticsRequest, {
        learnedWords: result.rightAnswers.length,
        optional: {}
      });
    }
  }
}

function* statisticsSaga() {
  yield takeLatest(fetchGetStatisticsAction, workGetStatisticsFetch);
}

export default statisticsSaga;
//добавить в saga.ts
