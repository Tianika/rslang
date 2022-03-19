import * as Effects from 'redux-saga/effects';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { GettingWordStat, ResultGame } from './types';
import {
  createWordDataRequest,
  getStatisticsRequest,
  getWordDataRequest,
  putStatisticsRequest,
  updateWordDataRequest
} from './result.api';
import { takeEvery, takeLatest } from 'redux-saga/effects';
import { GameTypes } from '../../utils';

// interface ShortStatistics {
//   newWordsCount: number;
//   failedWordsCount: number;
//   longSeriesCount: number;
//   date: Date;
// }
// type LongStatistics = Array<{ date: Date; count: number }>;

//создаем экшен для запроса
export const fetchGetStatisticsAction = createAction<ResultGame, string>('getStatistics/fetch');

function* workGetStatisticsFetch(action: PayloadAction<ResultGame>) {
  const call: any = Effects.call;
  const result = { ...action.payload };

  try {
    // запрос на получение статистики по каждому слову
    const { data: wordsStatistics } = yield call(getWordDataRequest);

    //запрос на получение статистики
    const { data: statistics } = yield call(getStatisticsRequest);

    const today = new Date().toLocaleDateString('ru');
    const errors = result.errorAnswers;

    let newWords = 0;
    let learnedWords = 0;

    // для ошибок
    for (let i = 0; i < errors.length; i += 1) {
      const error: any = errors[i];
      const errorId = error.id || error._id;

      if (!error) return;

      let wordStat;

      const statForWord = wordsStatistics.find((word: GettingWordStat) => word.wordId === errorId);

      if (statForWord) {
        // обновить статистику по слову
        wordStat = {
          difficulty: 'unstudied',
          optional: {
            correct: statForWord.optional.correct,
            wrong: statForWord.optional.wrong + 1,
            series: 0
          }
        };

        yield call(updateWordDataRequest, errorId, wordStat);
      } else {
        newWords += 1;
        // создать статистику по слову
        wordStat = {
          difficulty: 'unstudied',
          optional: {
            correct: 0,
            wrong: 1,
            series: 0
          }
        };

        yield call(createWordDataRequest, errorId, wordStat);
      }
    }

    //для правильных ответов
    const corrects = result.rightAnswers;

    for (let i = 0; i < corrects.length; i += 1) {
      const correct: any = corrects[i];
      const correctId = correct.id || correct._id;

      if (!correct) return;

      let wordStat;

      const statForWord = wordsStatistics.find(
        (word: GettingWordStat) => word.wordId === correctId
      );

      if (statForWord) {
        // обновить статистику по слову
        if (
          (statForWord.difficulty === 'hard' && statForWord.optional.series === 4) ||
          (statForWord.difficulty === 'unstudied' && statForWord.optional.series === 2)
        ) {
          learnedWords += 1;

          wordStat = {
            difficulty: 'learned',
            optional: {
              correct: statForWord.optional.correct + 1,
              wrong: statForWord.optional.wrong,
              series: statForWord.optional.series + 1
            }
          };
        } else if (statForWord.difficulty === 'learned') {
          wordStat = {
            difficulty: 'learned',
            optional: {
              correct: statForWord.optional.correct + 1,
              wrong: statForWord.optional.wrong,
              series: statForWord.optional.series + 1
            }
          };
        } else {
          wordStat = {
            difficulty: 'unstudied',
            optional: {
              correct: statForWord.optional.correct + 1,
              wrong: statForWord.optional.wrong,
              series: statForWord.optional.series + 1
            }
          };
        }

        yield call(updateWordDataRequest, correctId, wordStat);
      } else {
        newWords += 1;

        // создать статистику по слову
        wordStat = {
          difficulty: 'unstudied',
          optional: {
            correct: 1,
            wrong: 0,
            series: 1
          }
        };

        yield call(createWordDataRequest, correctId, wordStat);
      }
    }

    if (action.payload.gameType === 'Sprint') {
      //обновляем данные, если игра спринт
      const longest =
        statistics.optional.sprint.longestSeries < result.longestSeries
          ? result.longestSeries
          : statistics.optional.sprint.longestSeries;

      statistics.learnedWords += learnedWords;

      if (statistics.optional.sprint.date === today) {
        statistics.optional.sprint.date = today;
        statistics.optional.sprint.learnedWords += learnedWords;
        statistics.optional.sprint.correctAnswers += result.rightAnswers.length;
        statistics.optional.sprint.allWords +=
          result.errorAnswers.length + result.rightAnswers.length;
        statistics.optional.sprint.longestSeries = longest;

        statistics.optional.long[today] = {
          learnedWords: statistics.optional.long[today].learnedWords + learnedWords,
          newWords: statistics.optional.long[today].newWords + newWords
        };
      } else {
        const yesterday = new Date(+new Date() - 86400000).toLocaleDateString('ru');

        statistics.optional.sprint.date = today;
        statistics.optional.sprint.learnedWords = learnedWords;
        statistics.optional.sprint.correctAnswers = result.rightAnswers.length;
        statistics.optional.sprint.allWords =
          result.errorAnswers.length + result.rightAnswers.length;
        statistics.optional.sprint.longestSeries = result.longestSeries;

        if (statistics.optional.long[yesterday]) {
          statistics.optional.long[today] = {
            learnedWords: statistics.optional.long[yesterday].learnedWords + learnedWords,
            newWords: statistics.optional.long[yesterday].newWords + newWords
          };
        } else {
          statistics.optional.long[today] = {
            learnedWords: learnedWords,
            newWords: newWords
          };
        }
      }
      //отправить на сервер
      yield call(putStatisticsRequest, statistics);
    } else if (action.payload.gameType === GameTypes.AudioCall) {
      //обновляем данные, если игра аудиовызов
      const longest =
        statistics.optional.audiocall.longestSeries < result.longestSeries
          ? result.longestSeries
          : statistics.optional.audiocall.longestSeries;

      statistics.learnedWords += learnedWords;

      if (statistics.optional.audiocall.date === today) {
        statistics.optional.audiocall.date = today;
        statistics.optional.audiocall.learnedWords += learnedWords;
        statistics.optional.audiocall.correctAnswers += result.rightAnswers.length;
        statistics.optional.audiocall.allWords +=
          result.errorAnswers.length + result.rightAnswers.length;
        statistics.optional.audiocall.longestSeries = longest;

        statistics.optional.long[today] = {
          learnedWords: statistics.optional.long[today].learnedWords + learnedWords,
          newWords: statistics.optional.long[today].newWords + newWords
        };
      } else {
        const yesterday = new Date(+new Date() - 86400000).toLocaleDateString('ru');

        statistics.optional.audiocall.date = today;
        statistics.optional.audiocall.learnedWords = learnedWords;
        statistics.optional.audiocall.correctAnswers = result.rightAnswers.length;
        statistics.optional.audiocall.allWords =
          result.errorAnswers.length + result.rightAnswers.length;
        statistics.optional.audiocall.longestSeries = result.longestSeries;

        if (statistics.optional.long[yesterday]) {
          statistics.optional.long[today] = {
            learnedWords: statistics.optional.long[yesterday].learnedWords + learnedWords,
            newWords: statistics.optional.long[yesterday].newWords + newWords
          };
        } else {
          statistics.optional.long[today] = {
            learnedWords: learnedWords,
            newWords: newWords
          };
        }
      }
      //отправить на сервер
      yield call(putStatisticsRequest, statistics);
    }
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
  yield takeEvery(fetchGetStatisticsAction, workGetStatisticsFetch);
}

export default statisticsSaga;
//добавить в saga.ts
