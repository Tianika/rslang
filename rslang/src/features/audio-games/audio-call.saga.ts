import { put, takeLatest } from 'redux-saga/effects';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import * as Effects from 'redux-saga/effects';
import { LoadingState } from '../../utils';
import { requestWordsFromGroup } from './audio-call.api';
import { getRandomNumber } from './utils';
import { audioGameActions } from './audio-call.slice';
import { AxiosResponse } from 'axios';

const all: any = Effects.all;
const call: any = Effects.call;

//создаем экшен для запроса
export const fetchAudioAction = createAction<{ level: number; page: number }, string>(
  'audio/fetch'
);

//получаем функцию из экшенов
const { changeLoadingState, setWordsArray, setFakeWordsArray } = audioGameActions;

function* audioGameFetch(action: PayloadAction<{ level: number; page: number }>) {
  yield put(changeLoadingState(LoadingState.Loading));

  try {
    //рандомный номер страницы
    const fakePage = getRandomNumber(29);
    //получаем данные из запроса
    const { data } = yield call(
      requestWordsFromGroup,
      action.payload.level,
      action.payload.page
    ) as AxiosResponse;
    const prom1 = call(requestWordsFromGroup, action.payload.level, fakePage) as AxiosResponse;
    const prom2 = call(requestWordsFromGroup, action.payload.level, fakePage) as AxiosResponse;
    const prom3 = call(requestWordsFromGroup, action.payload.level, fakePage) as AxiosResponse;
    const prom4 = call(requestWordsFromGroup, action.payload.level, fakePage) as AxiosResponse;
    const [...wordsResponse] = yield all([prom1, prom2, prom3, prom4]);
    const words = wordsResponse.map((resp: AxiosResponse) => resp.data).flat();
    yield put(setWordsArray(data));
    yield put(setFakeWordsArray(words));
    console.log(words);
    yield put(changeLoadingState(LoadingState.Success));
  } catch (error: any) {
    yield put(changeLoadingState(LoadingState.Error));
  }
}

function* audioSaga() {
  yield takeLatest(fetchAudioAction, audioGameFetch);
}

export default audioSaga;
