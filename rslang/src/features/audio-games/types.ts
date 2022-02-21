import { LoadingState } from '../../utils';

export type Level = {
  level: number;
};

export type IsGame = {
  isGame: boolean;
};

export type AudioFetch = Level &
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

export type AudioWordsState = {
  loadingState: LoadingState;
  words: Array<Word | undefined>;
  rightAnswers: Array<Word | undefined>;
  errorAnswers: Array<Word | undefined>;
  fakeWords: Array<Word>;
};

export type AudioGameState = {
  words: Array<Word | undefined>;
  fakeWords: Array<Word | undefined>;
};

export type ButtonProps = {
  updateCurrentLongestSeries: any;
  fakeArray: any;
  showAnswer: any;
  hideAnswer: any;
  rightWord: string;
  countChoice: any;
  changeCurrentWord: any;
  setArrayWordRightId: any;
  idCurrentWord: string;
  count: number;
  upCurrentWordIndex: any;
  audioGameErrorAnswerHandler: any;
  audioGameRightAnswerHandler: any;
};
export type ImageAnswer = {
  linkImage: string;
};
export type BlockVisible = {
  visible: boolean;
};
