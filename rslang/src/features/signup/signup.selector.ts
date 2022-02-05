import { RootState } from '../../app/store';
import { NewUser } from './types';

export const newUserSelector = (state: RootState): NewUser => {
  return {
    name: state.signup.name,
    email: state.signup.email,
    password: state.signup.password
  };
};
