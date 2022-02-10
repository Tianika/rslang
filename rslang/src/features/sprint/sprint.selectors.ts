import { RootState } from '../../app/store';

//получаем уровень сложности
export const selectedGroup = (state: RootState) => {
  return state.sprint.level;
};

export const gameStatus = (state: RootState) => {
  return state.sprint.isGame;
};
