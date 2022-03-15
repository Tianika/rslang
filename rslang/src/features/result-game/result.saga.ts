import * as Effects from 'redux-saga/effects';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { ResultGame } from './types';
import { getStatisticsRequest, putStatisticsRequest } from './result.api';
import { takeLatest } from 'redux-saga/effects';
import { GameTypes } from '../../utils';

//создаем экшен для запроса
export const fetchGetStatisticsAction = createAction<ResultGame, string>('getStatistics/fetch');

function* workGetStatisticsFetch(action: PayloadAction<ResultGame>) {
  const call: any = Effects.call;
  const result = { ...action.payload };

  try {
    //запрос на получение статистики
    const { data } = yield call(getStatisticsRequest);

    let newData;
    const today = new Date().toLocaleDateString('ru');
    console.log(today);
    console.log('data ', data);

    if (action.payload.gameType === GameTypes.Sprint) {
      //обновляем данные, если игра спринт
      const longest =
        data.optional.sprint.longestSeries < result.longestSeries
          ? result.longestSeries
          : data.optional.sprint.longestSeries;

      newData = {
        learnedWords: 5,
        optional: {
          sprint: {
            date: today,
            learnedWords: 0,
            correctAnswers: result.rightAnswers.length,
            allWords: result.errorAnswers.length + result.rightAnswers.length,
            longestSeries: longest
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
              newWord: 10
            }
          }
        }
      };
    } else if (action.payload.gameType === GameTypes.AudioCall) {
      //обновляем данные, если игра аудиовызов
      const longest =
        data.optional.audiocall.longestSeries < result.longestSeries
          ? result.longestSeries
          : data.optional.audiocall.longestSeries;

      newData = {
        learnedWords: 7,
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
            longestSeries: longest
          },
          long: {
            [today]: {
              learnedWords: 0,
              newWord: 11
            }
          }
        }
      };
    }

    //отправить на сервер
    yield call(putStatisticsRequest, newData);
  } catch (error: any) {
    if (error.response) {
      if (error.response.status == 404) {
        let newData;
        const today = new Date().toDateString();

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
