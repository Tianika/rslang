import { put, takeLatest } from 'redux-saga/effects';
import * as Effects from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { textBookActions } from '../textbook/textbook.slice';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { postUserWord } from './wordsPage.api';
import { getAggregatedWords } from './wordsPage.api';

const call: any = Effects.call;

export const postUserWordAction = createAction<string, string>('userWord/post');
export const getAggregatedWordsAction = createAction<undefined, string>('aggregatedWords/get');

const { setAggregatedWords } = textBookActions;

function* getAggregatedWordsSaga() {
  const { data } = yield call(postUserWord) as AxiosResponse;
  yield put(setAggregatedWords(data));
}

function* postUserWordSaga(action: PayloadAction<string>) {
  try {
    console.log(action);
    const { data } = yield call(postUserWord, action.payload) as Response;
    console.log(data);
    const { slova } = yield call(getAggregatedWords());
    yield put(setAggregatedWords(slova));
  } catch (error: any) {}
}

function* wordsPageSaga() {
  yield takeLatest(postUserWordAction, postUserWordSaga);
  yield takeLatest(getAggregatedWordsAction, getAggregatedWordsSaga);
}

export { wordsPageSaga };
