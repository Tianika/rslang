import { RootState } from '../../app/store';
import { User } from './types';

//получаем данные пользователя
export const userSelector = (state: RootState): User => {
  return {
    email: state.login.email,
    password: state.login.password
  };
};

//получаем статус соединения с сервером
export const statusSelector = (state: RootState) => {
  return {
    status: state.login.loadingState
  };
};
