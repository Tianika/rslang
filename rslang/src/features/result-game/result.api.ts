import axios, { AxiosPromise } from 'axios';
import { Statistics } from './types';

// получить статистику по словам
export const getWordDataRequest = (): AxiosPromise<Response> => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.rslangUserToken}`
    }
  };

  const id = localStorage.rslangUserId;

  return axios.get(`https://learnwords-team17.herokuapp.com/users/${id}/statistics`, config);
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
