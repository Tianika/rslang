import { RootState } from '../../app/store';

// получаем статус соединения с сервером
export const statusSelector = (state: RootState) => {
  return {
    status: state.textBook.loadingState
  };
};
