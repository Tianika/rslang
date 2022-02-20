import { put, takeLatest } from 'redux-saga/effects';
import * as Effects from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { deleteUserWord, postUserWord, requestDifficultWords, requestWords } from './wordsPage.api';
import { LoadingState } from '../../utils';
import { wordsPageActions } from './wordsPage.slice';

const call: any = Effects.call;

export const postUserWordAction = createAction<string, string>('userWord/post');
export const getAggregatedWordsAction = createAction<undefined, string>('aggregatedWords/get');
export const deleteUserWordAction = createAction<string, string>('deleteUserWords/delete');

const { setAggregatedWords } = wordsPageActions;

function* getAggregatedWordsSaga() {
  const { data } = yield call(postUserWord) as AxiosResponse;
  yield put(setAggregatedWords(data));
}

function* postUserWordSaga(action: PayloadAction<string>) {
  try {
    console.log(action);
    const { data } = yield call(postUserWord, action.payload) as Response;
    console.log(data);
    // const { slova } = yield call(getAggregatedWords());
    // yield put(setAggregatedWords(slova));
  } catch (error: any) {}
}

function* deleteUserWordsSaga(action: PayloadAction<string>) {
  console.log(action);
  if (action) {
    yield call(deleteUserWord(action.payload));
  }
}

//запрос слов для страницы
export const fetchTextBookAction = createAction<{ group: string; page: string }, string>(
  'textbook/fetch'
);

const { changeLoadingState, setWords } = wordsPageActions;

function* fetchTextBookSaga(action: PayloadAction<{ group: string; page: string }>) {
  yield put(changeLoadingState(LoadingState.Loading));

  let words;

  try {
    if (+action.payload.group < 6) {
      const { data } = yield call(requestWords, action.payload.group, action.payload.page);

      words = data;
    } else if (+action.payload.group === 6) {
      const { data } = yield call(requestDifficultWords);

      words = data[0].paginatedResults;
    }

    yield put(setWords(words));
    yield put(changeLoadingState(LoadingState.Success));
  } catch (error: any) {
    console.log(error.response.status);

    yield put(changeLoadingState(LoadingState.Error));
  }
}

function* textBookSaga() {
  yield takeLatest(fetchTextBookAction, fetchTextBookSaga);
  yield takeLatest(postUserWordAction, postUserWordSaga);
  yield takeLatest(getAggregatedWordsAction, getAggregatedWordsSaga);
  yield takeLatest(deleteUserWordAction, deleteUserWordsSaga);
}

export { textBookSaga };
