import axios, { AxiosPromise } from 'axios';
import { baseUrl } from '../textbook/textbook.api';

export const getUserId = () => {
  if (localStorage.length) {
    const userId = localStorage.getItem('rslangUserId');
    return userId;
  }
};

export const getUserToken = () => {
  if (localStorage.length) {
    const userToken = localStorage.getItem('rslangUserToken');
    return userToken;
  }
};

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.rslangUserToken}`
  }
};

export const postUserWord = (wordId: string) => {
  const userId = getUserId();
  const data = {
    difficulty: 'hard',
    optional: {}
  };
  return axios.post(`${baseUrl}/users/${userId}/words/${wordId}`, data, config);
};

export const getAggregatedWords = () => {
  const userId = getUserId();
  return axios.get(
    `${baseUrl}/users/${userId}/aggregatedWords?wordsPerPage=3600&filter=%7B%22userWord.difficulty%22%3A%22hard%22%7D`,
    config
  );
};

export const deleteUserWordById = (wordId: string): AxiosPromise<Response> => {
  const userId = getUserId();
  return axios.delete(`${baseUrl}/users/${userId}/words/${wordId}`, config);
};
