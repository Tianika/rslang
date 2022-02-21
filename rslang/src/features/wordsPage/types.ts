import { LoadingState, TypeUserWords } from '../../utils';
import { IWord } from '../textbook/types';

export type WordsPageState = {
  words: Array<IWord>;
  difficultWords: Array<IWord>;
  learnedWords: Array<IWord>;
  loadingState: LoadingState;
};

export type UserWord = {
  wordId: string;
  type: TypeUserWords;
};
