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

//получаем сложные слова
export const difficultWordsSelector = (state: RootState) => {
  const userWordsIds: Array<string | undefined> = [];

  state.wordsPage.aggregatedWords.forEach((word) => {
    userWordsIds.push(word._id);
  });

  return userWordsIds;
};

//получаем изученные слова
export const learnedWordsSelector = (state: RootState) => {
  const userWordsIds: Array<string | undefined> = [];

  state.wordsPage.learnedWords.forEach((word) => {
    userWordsIds.push(word._id);
  });

  return userWordsIds;
};
