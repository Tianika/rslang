import { GameTypes } from '../../utils';
import { Word } from '../sprint/types';

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

export type WordStat = {
  difficulty: string;
  optional: {
    correct: number;
    wrong: number;
    series: number;
  };
};

export type GettingWordStat = WordStat & {
  id: string;
  wordId: string;
};
