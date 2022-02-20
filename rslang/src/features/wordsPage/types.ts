import { LoadingState } from '../../utils';
import { IWord } from '../textbook/types';

export type WordsPageState = {
  words: Array<IWord>;
  aggregatedWords: Array<IWord>;
  loadingState: LoadingState;
};
