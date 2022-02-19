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

  console.log(action.payload);
  const result = { ...action.payload };

  try {
    //запрос на получение статистики
    const { data } = yield call(getStatisticsRequest);
    console.log('get', data);

    let newData;
    const today = new Date().toDateString();

    if (action.payload.gameType === GameTypes.Sprint) {
      //новые данные, если игра спринт
      newData = {
        learnedWords: data.learnedWords + result.rightAnswers.length,
        optional: {
          wordStatistics: {
            date: today,
            count: data.optional.wordStatistics.count + result.rightAnswers.length
          },
          gameStatistics: {
            sprint: {
              date: today,
              learnedWords:
                data.optional.gameStatistics.sprint.learnedWords + result.rightAnswers.length,
              correctAnswers:
                data.optional.gameStatistics.sprint.correctAnswers + result.rightAnswers.length,
              errorAnswers:
                data.optional.gameStatistics.sprint.errorAnswers + result.errorAnswers.length,
              longestSeries: 0
            },
            audiocall: {
              date: today,
              learnedWords: data.optional.gameStatistics.audiocall.learnedWords,
              correctAnswers: data.optional.gameStatistics.audiocall.correctAnswers,
              errorAnswers: data.optional.gameStatistics.audiocall.errorAnswers,
              longestSeries: 0
            }
          }
        }
      };
    } else if (action.payload.gameType === GameTypes.AudioCall) {
      //новые данные, если игра аудиовызов
      newData = {
        learnedWords: data.learnedWords + result.rightAnswers.length,
        optional: {
          wordStatistics: {
            date: today,
            count: data.optional.wordStatistics.count + result.rightAnswers.length
          },
          gameStatistics: {
            sprint: {
              date: today,
              learnedWords: data.optional.gameStatistics.sprint.learnedWords,
              correctAnswers: data.optional.gameStatistics.sprint.correctAnswers,
              errorAnswers: data.optional.gameStatistics.sprint.errorAnswers,
              longestSeries: 0
            },
            audiocall: {
              date: today,
              learnedWords:
                data.optional.gameStatistics.audiocall.learnedWords + result.rightAnswers.length,
              correctAnswers:
                data.optional.gameStatistics.audiocall.correctAnswers + result.rightAnswers.length,
              errorAnswers:
                data.optional.gameStatistics.audiocall.errorAnswers + result.errorAnswers.length,
              longestSeries: 0
            }
          }
        }
      };
    }

    //отправить на сервер
    yield call(putStatisticsRequest, newData);
  } catch (error: any) {
    console.log(error.response);
    if (error.response) {
      console.log(error.response);

      if (error.response.status == 404) {
        let newData;
        const today = new Date().toDateString();

        if (action.payload.gameType === GameTypes.Sprint) {
          //новые данные, если игра спринт
          newData = {
            learnedWords: result.rightAnswers.length,
            optional: {
              wordStatistics: {
                date: today,
                count: result.rightAnswers.length
              },
              gameStatistics: {
                sprint: {
                  date: today,
                  learnedWords: result.rightAnswers.length,
                  correctAnswers: result.rightAnswers.length,
                  errorAnswers: result.errorAnswers.length,
                  longestSeries: 0
                },
                audiocall: {
                  date: today,
                  learnedWords: 0,
                  correctAnswers: 0,
                  errorAnswers: 0,
                  longestSeries: 0
                }
              }
            }
          };
        } else if (action.payload.gameType === GameTypes.AudioCall) {
          //новые данные, если игра аудиовызов
          newData = {
            learnedWords: result.rightAnswers.length,
            optional: {
              wordStatistics: {
                date: today,
                count: result.rightAnswers.length
              },
              gameStatistics: {
                sprint: {
                  date: today,
                  learnedWords: 0,
                  correctAnswers: 0,
                  wrongAnswers: 0,
                  longestSeries: 0
                },
                audiocall: {
                  date: today,
                  learnedWords: result.rightAnswers.length,
                  correctAnswers: result.rightAnswers.length,
                  wrongAnswers: result.errorAnswers.length,
                  longestSeries: 0
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
