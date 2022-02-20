import { put, takeLatest } from 'redux-saga/effects';
import { textBookActions } from './textbook.slice';

import { createAction, PayloadAction } from '@reduxjs/toolkit';
import * as Effects from 'redux-saga/effects';
import { LoadingState } from '../../utils';
import { requestDifficultWords, requestWords } from './textbook.api';

const call: any = Effects.call;

export const fetchTextBookAction = createAction<{ group: string; page: string }, string>(
  'textbook/fetch'
);

const { changeLoadingState, setWords } = textBookActions;

function* fetchTextBookSaga(action: PayloadAction<{ group: string; page: string }>) {
  yield put(changeLoadingState(LoadingState.Loading));

  let words;

  try {
    if (+action.payload.group < 6) {
      const { data } = yield call(requestWords, action.payload.group, action.payload.page);

      words = data;
    } else if (+action.payload.group === 6) {
      const { data } = yield call(requestDifficultWords);
      console.log(data[0].paginatedResults);

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
}

export { textBookSaga };
