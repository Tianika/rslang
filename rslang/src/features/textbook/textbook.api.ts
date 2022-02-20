import axios, { AxiosPromise } from 'axios';

export const baseUrl = 'https://learnwords-team17.herokuapp.com';

export const requestWords = (group = 0, page = 0): AxiosPromise =>
  axios.get(`${baseUrl}/words?group=${group}&page=${page}`);

export const requestDifficultWords = (): AxiosPromise<Response> => {
  const id = localStorage.rslangUserId;

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.rslangUserToken}`
    }
  };

  return axios.get(
    `${baseUrl}/users/${id}/aggregatedWords?wordsPerPage=3600&filter={"userWord.difficulty":"hard"}`,
    config
  );
};
