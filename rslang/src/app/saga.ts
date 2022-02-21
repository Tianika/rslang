import { all } from 'redux-saga/effects';
import loginSaga from '../features/login/login.saga';
import signupSaga from '../features/signup/signup.saga';

import { textBookSaga } from '../features/textbook/textbook.saga';
import { wordsPageSaga } from '../features/textbook/wordsPage/wordsPage.saga';
import statisticsSaga from '../features/result-game/result.saga';
import sprintSaga from '../features/sprint/sprint.saga';
import audioSaga from '../features/audio-games/audio-call.saga';

export function* rootSaga() {
  yield all([
    loginSaga(),
    signupSaga(),
    textBookSaga(),
    wordsPageSaga(),
    sprintSaga(),
    statisticsSaga(),
    audioSaga()
  ]);
}
