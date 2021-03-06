import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as Effects from 'redux-saga/effects';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import {
  deleteUserWord,
  getUserWord,
  postUserWord,
  requestDifficultWords,
  requestLearnedWords,
  requestWords,
  updateUserWord
} from './wordsPage.api';
import { LoadingState, TypeUserWords } from '../../utils';
import { wordsPageActions } from './wordsPage.slice';
import { UserWord } from './types';
import { AxiosResponse } from 'axios';

const call: any = Effects.call;

export const postUserWordAction = createAction<UserWord, string>('userWord/post');
export const getDifficultWordsAction = createAction<undefined, string>('DifficultWords/get');
export const deleteUserWordAction = createAction<string, string>('deleteUserWords/delete');
export const fetchTextBookAction = createAction<{ group: string; page: string }, string>(
  'textbook/fetch'
);
export const getUserWordAction = createAction<UserWord, string>('getUserWords/get');
export const getLearnedWordsAction = createAction<{ group: string; page: string }, string>(
  'learnedWords/get'
);

const { setDifficultWords, changeLoadingState, setWords, setLearnedWords } = wordsPageActions;

function* getDifficultWordsSaga() {
  const { data } = yield call(requestDifficultWords);
  yield put(setDifficultWords(data[0].paginatedResults));
}

function* getLearnedWordsSaga(action: PayloadAction<{ group: string; page: string }>) {
  const { data } = yield call(requestLearnedWords, action.payload.group, action.payload.page);
  yield put(setLearnedWords(data[0].paginatedResults));
}

function* postUserWordSaga(action: PayloadAction<{ wordId: string; type: TypeUserWords }>) {
  try {
    yield call(postUserWord, action.payload.wordId, action.payload.type);
  } catch (error: any) {}
}

//удалить пользовательское слово
function* deleteUserWordsSaga(action: PayloadAction<string>) {
  yield call(deleteUserWord, action.payload);
}

//получить пользовательское слово
function* getUserWordsSaga(action: PayloadAction<UserWord>) {
  const wordId = action.payload.wordId;
  const type = action.payload.type;

  try {
    const response: Response = yield call(getUserWord, wordId);

    if (response.status == 200) {
      yield call(updateUserWord, wordId, type);
    }
    if (response.status == 404) {
      yield call(postUserWord, wordId, type);
    }

    const difficult: AxiosResponse = yield call(requestDifficultWords);
    yield put(setDifficultWords(difficult.data[0].paginatedResults));

    const words: AxiosResponse = yield call(
      requestLearnedWords,
      action.payload.group,
      action.payload.page
    );

    yield put(setLearnedWords(words.data[0].paginatedResults));
  } catch (error) {}
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

    const wordsArr = JSON.parse(JSON.stringify(words));

    yield put(setWords(wordsArr));
    yield put(changeLoadingState(LoadingState.Success));
  } catch (error: any) {
    yield put(changeLoadingState(LoadingState.Error));
  }
}

function* wordsPageSaga() {
  yield takeLatest(fetchTextBookAction, fetchTextBookSaga);
  yield takeLatest(postUserWordAction, postUserWordSaga);
  yield takeLatest(getDifficultWordsAction, getDifficultWordsSaga);
  yield takeLatest(deleteUserWordAction, deleteUserWordsSaga);
  yield takeLatest(getUserWordAction, getUserWordsSaga);
  yield takeEvery(getLearnedWordsAction, getLearnedWordsSaga);
}

export { wordsPageSaga };
