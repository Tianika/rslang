import { all } from 'redux-saga/effects';
import loginSaga from '../features/login/login.saga';
import signupSaga from '../features/signup/signup.saga';
import statisticsSaga from '../features/result-game/result.saga';
import sprintSaga from '../features/sprint/sprint.saga';
import { wordsPageSaga } from '../features/wordsPage/wordsPage.saga';
import audioSaga from '../features/audio-games/audio-call.saga';
import getStatisticsSaga from '../components/statistic-data/statistis-data.saga';
export function* rootSaga() {
  yield all([
    loginSaga(),
    signupSaga(),
    wordsPageSaga(),
    sprintSaga(),
    statisticsSaga(),
    audioSaga(),
    getStatisticsSaga()
  ]);
}
