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

export type SprintGameState = {
  loadingState: LoadingState;
  totalScore: number;
  words: Array<Word | undefined>;
  checkboxesLevel: number;
  levelAnswer: number;
  currentWordIndex: number;
  currentWord: '';
  currentTranslate: '';
  isRightTranslate: boolean;
  scorePerWord: number;
  checkboxes: Boolean[];
};
