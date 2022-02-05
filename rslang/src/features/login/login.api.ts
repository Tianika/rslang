import { User } from './types';
import axios from 'axios';

export const requestLogin = (action: User): Promise<Response> => {
  return axios.post('https://learnwords-team17.herokuapp.com/signin', action);
};
