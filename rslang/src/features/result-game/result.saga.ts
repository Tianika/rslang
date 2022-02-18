import * as Effects from 'redux-saga/effects';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { ResultGame, Statistics, StatisticsResponce } from './types';
import { getStatisticsRequest, putStatisticsRequest } from './result.api';
import { takeLatest } from 'redux-saga/effects';

//создаем экшен для запроса
export const fetchStatisticsAction = createAction<ResultGame, string>('sendStatistics/fetch');

function* workStatisticsFetch(action: PayloadAction<ResultGame>) {
  const call: any = Effects.call;

  console.log(action.payload);

  try {
    //запрос на получение статистики
    const { data } = yield call(getStatisticsRequest, action.payload);
    console.log(data);

    //обработать данные

    //отправить на сервер
    yield call(putStatisticsRequest, data);
  } catch (error: any) {
    console.log(error.response.status);
    //yield call(putStatisticsRequest, data);
  }
}

function* statisticsSaga() {
  yield takeLatest(fetchStatisticsAction, workStatisticsFetch);
}

export default statisticsSaga;
//добавить в saga.ts
