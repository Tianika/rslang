import axios, { AxiosPromise } from 'axios';

export const baseUrl = 'https://learnwords-team17.herokuapp.com';

export const requestWords = (group = 0, page = 0): AxiosPromise =>
  axios.get(`${baseUrl}/words?group=${group}&page=${page}`);
