import * as Effects from 'redux-saga/effects';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { ResultGame } from './types';
import { getStatisticsRequest, getWordDataRequest, putStatisticsRequest } from './result.api';
import { takeLatest } from 'redux-saga/effects';
import { GameTypes } from '../../utils';

//создаем экшен для запроса
export const fetchGetStatisticsAction = createAction<ResultGame, string>('getStatistics/fetch');

function* workGetStatisticsFetch(action: PayloadAction<ResultGame>) {
  const call: any = Effects.call;
  const result = { ...action.payload };

  try {
    // запрос на получение статистики по каждому слову

    const { data: wordsStatistics } = yield call(getWordDataRequest);
    console.log('wordsStatistics ', wordsStatistics);

    //запрос на получение статистики
    const { data: statistics } = yield call(getStatisticsRequest);

    const today = new Date().toLocaleDateString('ru');
    console.log(today);
    console.log('get stat ', statistics);

    if (action.payload.gameType === GameTypes.Sprint) {
      //обновляем данные, если игра спринт
      const longest =
        statistics.optional.sprint.longestSeries < result.longestSeries
          ? result.longestSeries
          : statistics.optional.sprint.longestSeries;

      statistics.learnedWords += 1;
      statistics.optional.sprint.date = today;
      statistics.optional.sprint.learnedWords += 1;
      statistics.optional.sprint.correctAnswers += result.rightAnswers.length;
      statistics.optional.sprint.allWords +=
        result.errorAnswers.length + result.rightAnswers.length;
      statistics.optional.sprint.longestSeries = longest;
      statistics.optional.long[today].learnedWords += 1;
      statistics.optional.long[today].newWord += 2;
    } else if (action.payload.gameType === GameTypes.AudioCall) {
      //обновляем данные, если игра аудиовызов
      const longest =
        statistics.optional.audiocall.longestSeries < result.longestSeries
          ? result.longestSeries
          : statistics.optional.audiocall.longestSeries;

      statistics.learnedWords += 1;
      statistics.optional.audiocall.date = today;
      statistics.optional.audiocall.learnedWords += 1;
      statistics.optional.audiocall.correctAnswers += result.rightAnswers.length;
      statistics.optional.audiocall.allWords +=
        result.errorAnswers.length + result.rightAnswers.length;
      statistics.optional.audiocall.longestSeries = longest;
      statistics.optional.long[today].learnedWords += 1;
      statistics.optional.long[today].newWord += 2;
    }

    //отправить на сервер
    yield call(putStatisticsRequest, statistics);
  } catch (error: any) {
    if (error.response) {
      if (error.response.status == 404) {
        let newData;
        const today = new Date().toLocaleDateString('ru');

        if (action.payload.gameType === GameTypes.Sprint) {
          //новые данные, если игра спринт
          newData = {
            learnedWords: 0,
            optional: {
              sprint: {
                date: today,
                learnedWords: 0,
                correctAnswers: result.rightAnswers.length,
                allWords: result.errorAnswers.length + result.rightAnswers.length,
                longestSeries: result.longestSeries
              },
              audiocall: {
                date: today,
                learnedWords: 0,
                correctAnswers: 0,
                allWords: 0,
                longestSeries: 0
              },
              long: {
                [today]: {
                  learnedWords: 0,
                  newWord: 0
                }
              }
            }
          };
        } else if (action.payload.gameType === GameTypes.AudioCall) {
          //новые данные, если игра аудиовызов
          newData = {
            learnedWords: 0,
            optional: {
              sprint: {
                date: today,
                learnedWords: 0,
                correctAnswers: 0,
                allWords: 0,
                longestSeries: 0
              },
              audiocall: {
                date: today,
                learnedWords: 0,
                correctAnswers: result.rightAnswers.length,
                allWords: result.errorAnswers.length,
                longestSeries: result.longestSeries
              },
              long: {
                [today]: {
                  learnedWords: 0,
                  newWord: 0
                }
              }
            }
          };
        }

        yield call(putStatisticsRequest, newData);
      }
    }
  }
}

function* statisticsSaga() {
  yield takeLatest(fetchGetStatisticsAction, workGetStatisticsFetch);
}

export default statisticsSaga;
//добавить в saga.ts
