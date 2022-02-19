import { Word } from '../audio-games/types';

export type ResultGame = {
  score?: number;
  rightAnswers: Array<Word | undefined>;
  errorAnswers: Array<Word | undefined>;
};
