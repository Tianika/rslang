import { Word } from '../sprint/types';

export type ResultGame = {
  score: number;
  rightAnswers: Array<Word | undefined>;
  errorAnswers: Array<Word | undefined>;
};
