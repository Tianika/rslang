import { LoadingState } from '../../utils';

export type Level = {
  level: number;
};

export type IsGame = {
  isGame: boolean;
};

export type SprintFetch = Level &
  IsGame & {
    loadingState: LoadingState;
  };

export type Word = {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
};

type OptionalWord = {
  correct: number;
  wrong: number;
  series: number;
};

type UserWords = {
  difficult: string;
  optional: OptionalWord;
};

export type SprintWordsState = {
  loadingState: LoadingState;
  words: Array<Word>;
  userWords: Array<UserWords>;
  rightAnswers: Array<Word | undefined>;
  errorAnswers: Array<Word | undefined>;
};

export type SprintGameState = {
  words: Array<Word | undefined>;
};

export type DataForFetch = {
  level: number;
  pages: Array<number | undefined>;
};
