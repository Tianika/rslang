import { RootState } from '../../app/store';
import { NewUser } from './types';

//получаем данные нового пользователя
export const newUserSelector = (state: RootState): NewUser => {
  return {
    name: state.signup.name,
    email: state.signup.email,
    password: state.signup.password
  };
};

// получаем статус соединения с сервером
export const statusSelector = (state: RootState) => {
  return {
    status: state.signup.loadingState
  };
};
