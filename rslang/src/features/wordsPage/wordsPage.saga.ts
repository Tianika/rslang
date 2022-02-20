import { put, takeLatest } from 'redux-saga/effects';
import * as Effects from 'redux-saga/effects';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { deleteUserWord, postUserWord, requestDifficultWords, requestWords } from './wordsPage.api';
import { LoadingState } from '../../utils';
import { wordsPageActions } from './wordsPage.slice';

const call: any = Effects.call;

export const postUserWordAction = createAction<string, string>('userWord/post');
export const getAggregatedWordsAction = createAction<undefined, string>('aggregatedWords/get');
export const deleteUserWordAction = createAction<string, string>('deleteUserWords/delete');
export const fetchTextBookAction = createAction<{ group: string; page: string }, string>(
  'textbook/fetch'
);

const { setAggregatedWords, changeLoadingState, setWords } = wordsPageActions;

function* getAggregatedWordsSaga() {
  const { data } = yield call(requestDifficultWords) as Response;
  console.log(data);
  yield put(setAggregatedWords(data[0].paginatedResults));
}

function* postUserWordSaga(action: PayloadAction<string>) {
  try {
    const { data } = yield call(postUserWord, action.payload) as Response;
    console.log(data);
  } catch (error: any) {}
}

function* deleteUserWordsSaga(action: PayloadAction<string>) {
  console.log('delete', action);

  yield call(deleteUserWord(action.payload));
}

//запрос слов для страницы
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

function* wordsPageSaga() {
  yield takeLatest(fetchTextBookAction, fetchTextBookSaga);
  yield takeLatest(postUserWordAction, postUserWordSaga);
  yield takeLatest(getAggregatedWordsAction, getAggregatedWordsSaga);
  yield takeLatest(deleteUserWordAction, deleteUserWordsSaga);
}

export { wordsPageSaga };
