import { RootState } from '../../app/store';

//статус загрузки
export const sprintLoadingStatus = (state: RootState) => {
  return state.sprintGame.loadingState;
};

//массив слов
export const sprintWordsSelector = (state: RootState) => {
  return state.sprintGame.words;
};

//правильные ответы
export const sprintRightAnswersSelector = (state: RootState) => {
  return state.sprintGame.rightAnswers;
};

//неправильные ответы
export const sprintErrorAnswersSelector = (state: RootState) => {
  return state.sprintGame.errorAnswers;
};
