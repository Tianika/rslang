import axios, { AxiosPromise } from 'axios';

export const requestUserStatistic = (): AxiosPromise<Response> => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.rslangUserToken}`
    }
  };
  const id = localStorage.rslangUserId;
  return axios.get(`https://learnwords-team17.herokuapp.com/users/${id}/statistics`, config);
};
