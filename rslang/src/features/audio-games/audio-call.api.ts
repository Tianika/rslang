import axios, { AxiosPromise } from 'axios';

export const requestWordsFromGroup = (level: number, page: number): AxiosPromise => {
  return axios.get(`https://learnwords-team17.herokuapp.com/words?group=${level}&page=${page}`);
};
