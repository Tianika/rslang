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
  const difficultWordsIds: Array<string | undefined> = [];

  state.wordsPage.difficultWords.forEach((word) => {
    difficultWordsIds.push(word._id);
  });

  return difficultWordsIds;
};

//получаем изученные слова
export const learnedWordsSelector = (state: RootState) => {
  const learnedWordsIds: Array<string | undefined> = [];

  state.wordsPage.learnedWords.forEach((word) => {
    learnedWordsIds.push(word._id);
  });

  return learnedWordsIds;
};
