import { RootState } from '../../app/store';

//статус загрузки
export const loadingStatus = (state: RootState) => {
  return state.audioGame.loadingState;
};

//массив слов
export const wordsSelector = (state: RootState) => {
  return state.audioGame.words;
};

//правильные ответы
export const rightAnswersSelector = (state: RootState) => {
  return state.audioGame.rightAnswers;
};

//неправильные ответы
export const errorAnswersSelector = (state: RootState) => {
  return state.audioGame.errorAnswers;
};
