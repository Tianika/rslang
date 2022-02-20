import { GameTypes } from '../../utils';
import { Word } from '../audio-games/types';

export type ResultGame = {
  score?: number;
  rightAnswers: Array<Word | undefined>;
  errorAnswers: Array<Word | undefined>;
  gameType: GameTypes;
  longestSeries: number;
};

export type UserId = { id: string };

export type StatisticsResponce = UserId & Statistics;

export type Statistics = {
  learnedWords: number;
  optional: {
    wordStatistics: {
      date: string;
      count: number;
    };
    gameStatistics: {
      sprint: {
        date: string;
        learnedWords: number;
        correctAnswers: number;
        wrongAnswers: number;
        longestSeries: number;
      };
      audiocall: {
        date: string;
        learnedWords: number;
        correctAnswers: number;
        wrongAnswers: number;
        longestSeries: number;
      };
    };
  };
};
