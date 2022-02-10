import axios, { AxiosPromise } from 'axios';

const baseUrl = 'https://learnwords-team17.herokuapp.com/words';

export const requestWords = (group = 0, page = 0): AxiosPromise =>
  axios.get(`${baseUrl}?group=${group}&page=${page}`);
