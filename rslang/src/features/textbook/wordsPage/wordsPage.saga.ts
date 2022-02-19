import { put, takeLatest } from 'redux-saga/effects';
import { textBookActions } from '../textbook.slice';

import { createAction, PayloadAction } from '@reduxjs/toolkit';
import * as Effects from 'redux-saga/effects';
import { LoadingState } from '../../../utils';
import { postUserWord } from './wordsPage.api';
import { Axios, AxiosResponse } from 'axios';
import { getAggregatedWords } from './wordsPage.api';

const call: any = Effects.call;

//создаем экшен для запроса
export const postUserWordAction = createAction<string, string>('userWord/post');
export const getAggregatedWordsAction = createAction<undefined, string>('aggregatedWords/get');
// export const fetchTextBookAction = createAction()

//получаем функцию из экшенов
const { changeLoadingState, setAggregatedWords } = textBookActions;

function* getAggregatedWordsSaga() {
  const { data } = yield call(postUserWord) as AxiosResponse;
  yield put(setAggregatedWords(data));
}

function* postUserWordSaga(action: PayloadAction<string>) {
  try {
    //получаем данные из запроса

    console.log(action);
    const { data } = yield call(postUserWord, action.payload) as Response;
    console.log(data);
    const { slova } = yield call(getAggregatedWords());
    yield put(setAggregatedWords(slova));
    //сохраняем данные
  } catch (error: any) {
    // console.log(error.response.status);
  }
}

function* wordsPageSaga() {
  yield takeLatest(postUserWordAction, postUserWordSaga);
  yield takeLatest(getAggregatedWordsAction, getAggregatedWordsSaga);
}

export { wordsPageSaga };
//добавить в rootsaga
