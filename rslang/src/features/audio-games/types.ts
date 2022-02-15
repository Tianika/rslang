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
  id: 'string';
  group: number;
  page: number;
  word: 'string';
  image: 'string';
  audio: 'string';
  audioMeaning: 'string';
  audioExample: 'string';
  textMeaning: 'string';
  textExample: 'string';
  transcription: 'string';
  wordTranslate: 'string';
  textMeaningTranslate: 'string';
  textExampleTranslate: 'string';
};

export type SprintWordsState = {
  loadingState: LoadingState;
  words: Array<Word | undefined>;
  rightAnswers: Array<Word | undefined>;
  errorAnswers: Array<Word | undefined>;
};

export type SprintGameState = {
  words: Array<Word | undefined>;
};
