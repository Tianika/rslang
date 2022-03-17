import axios, { AxiosPromise } from 'axios';
import { Statistics, WordStat } from './types';

export const baseUrl = 'https://learnwords-team17.herokuapp.com';

// получить статистику по словам
export const getWordDataRequest = (): AxiosPromise<Response> => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.rslangUserToken}`
    }
  };

  const id = localStorage.rslangUserId;

  return axios.get(`${baseUrl}/users/${id}/words`, config);
};

// создать статистику по слову
export const createWordDataRequest = (wordId: string, data: WordStat): AxiosPromise<Response> => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.rslangUserToken}`
    }
  };

  const body = {
    difficulty: data.difficulty,
    optional: { ...data.optional }
  };

  const id = localStorage.rslangUserId;

  return axios.post(`${baseUrl}/users/${id}/words/${wordId}`, body, config);
};

// обновить статистику по слову
export const updateWordDataRequest = (wordId: string, data: WordStat): AxiosPromise<Response> => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.rslangUserToken}`
    }
  };

  const body = {
    difficulty: data.difficulty,
    optional: { ...data.optional }
  };

  const id = localStorage.rslangUserId;

  return axios.put(`${baseUrl}/users/${id}/words/${wordId}`, body, config);
};

//получить статистику с сервера
export const getStatisticsRequest = (): AxiosPromise<Response> => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.rslangUserToken}`
    }
  };

  const id = localStorage.rslangUserId;

  return axios.get(`https://learnwords-team17.herokuapp.com/users/${id}/statistics`, config);
};

//отправить статистику на сервер
export const putStatisticsRequest = (action: Statistics): AxiosPromise<Response> => {
  const data = {
    learnedWords: action.learnedWords,
    optional: { ...action.optional }
  };

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.rslangUserToken}`
    }
  };

  const id = localStorage.rslangUserId;

  return axios.put(`https://learnwords-team17.herokuapp.com/users/${id}/statistics`, data, config);
};
