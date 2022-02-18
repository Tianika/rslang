import { GameTypes } from '../../utils';
import { Word } from '../sprint/types';

export type ResultGame = {
  score: number;
  rightAnswers: Array<Word | undefined>;
  errorAnswers: Array<Word | undefined>;
  gameType: GameTypes;
};

export type UserId = { id: string };

export type StatisticsResponce = UserId & Statistics;

export type Statistics = {
  learnedWords: number;
  optional: {
    wordStatistics: {
      date: Date;
      count: number;
    };
    gameStatistics: {
      sprint: {
        date: Date;
        learnedWords: number;
        correctAnswers: number;
        wrongAnswers: number;
        longestSeries: number;
      };
      audiocall: {
        date: Date;
        learnedWords: number;
        correctAnswers: number;
        wrongAnswers: number;
        longestSeries: number;
      };
    };
  };
};
