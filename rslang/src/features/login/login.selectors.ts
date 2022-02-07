import { RootState } from '../../app/store';
import { User } from './types';

export const userSelector = (state: RootState): User => {
  return {
    email: state.login.email,
    password: state.login.password
  };
};
