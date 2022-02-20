import { RootState } from '../../app/store';

//получаем статус соединения с сервером
export const statusSelector = (state: RootState) => {
  return {
    status: state.wordsPage.loadingState
  };
};

//получаем слова
export const wordsSelector = (state: RootState) => {
  return state.wordsPage.words;
};
