import * as Effects from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import { requestUserStatistic } from './statistis-data.api';
import { put, takeLatest } from 'redux-saga/effects';
import { getStatisticActions } from './statistic-data.slice';
const { getStatistic } = getStatisticActions;
//создаем экшен для запроса
export const fetchGettingStatisticsAction = createAction<undefined, string>(
  'gettingStatistics/fetch'
);

function* workGettingStatisticsFetch() {
  const call: any = Effects.call;
  try {
    //запрос на получение статистики
    const { data } = yield call(requestUserStatistic);
    yield put(getStatistic(data));
  } catch (error: any) {}
}

function* getStatisticsSaga() {
  yield takeLatest(fetchGettingStatisticsAction, workGettingStatisticsFetch);
}

export default getStatisticsSaga;
//добавить в saga.ts
