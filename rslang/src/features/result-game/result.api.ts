import axios, { AxiosPromise } from 'axios';
import { Statistics } from './types';

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
  const data = action;

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.rslangUserToken}`
    }
  };

  const id = localStorage.rslangUserId;

  return axios.put(`https://learnwords-team17.herokuapp.com/users/${id}/statistics`, data, config);
};
