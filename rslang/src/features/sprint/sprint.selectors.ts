import { RootState } from '../../app/store';

//получаем уровень сложности
export const selectedGroup = (state: RootState) => {
  return {
    level: state.sprint.level
  };
};
