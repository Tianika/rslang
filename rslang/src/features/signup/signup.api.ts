import { NewUser } from './types';
import axios from 'axios';

export const requestSignup = (action: NewUser): Promise<Response> => {
  return axios.post('https://learnwords-team17.herokuapp.com/users', action);
};
