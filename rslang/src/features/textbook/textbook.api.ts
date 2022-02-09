import axios, { AxiosPromise } from 'axios';

const baseUrl = 'https://learnwords-team17.herokuapp.com/words';

export const requestWords = (): AxiosPromise => axios.get(baseUrl);
