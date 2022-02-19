import { put, takeLatest } from 'redux-saga/effects';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import * as Effects from 'redux-saga/effects';
import { LoadingState } from '../../utils';
import { requestWordsFromGroup } from './audio-call.api';
import { getRandomNumber } from './utils';
import { audioGameActions } from './audio-call.slice';

const call: any = Effects.call;

//создаем экшен для запроса
export const fetchAudioAction = createAction<number, string>('audio/fetch');

//получаем функцию из экшенов
const { changeLoadingState, setWordsArray } = audioGameActions;

function* audioGameFetch(action: PayloadAction<number>) {
  yield put(changeLoadingState(LoadingState.Loading));

  try {
    //рандомный номер страницы
    const pageNumber = getRandomNumber(30);

    //получаем данные из запроса
    const { data } = yield call(requestWordsFromGroup, action.payload, pageNumber) as Response;
    console.log(data);

    //обрабатываем полученный массив слов
    yield put(setWordsArray(data));

    yield put(changeLoadingState(LoadingState.Success));
  } catch (error: any) {
    console.log(error.response.status);
    yield put(changeLoadingState(LoadingState.Error));
  }
}

function* audioSaga() {
  yield takeLatest(fetchAudioAction, audioGameFetch);
}

export default audioSaga;
//добавить в rootsaga
