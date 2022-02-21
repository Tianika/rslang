import axios, { AxiosPromise } from 'axios';

export const baseUrl = 'https://learnwords-team17.herokuapp.com';

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.rslangUserToken}`
  }
};

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

//добавить выбранный пользователем тип для слова
export const postUserWord = (wordId: string, type: string) => {
  const userId = getUserId();
  const data = {
    difficulty: type,
    optional: {}
  };
  console.log(data);
  return axios.post(`${baseUrl}/users/${userId}/words/${wordId}`, data, config);
};

//обновить выбранный пользователем тип для слова
export const updateUserWord = (wordId: string, type: string) => {
  const userId = getUserId();
  const data = {
    difficulty: type,
    optional: {}
  };
  console.log(data);
  return axios.put(`${baseUrl}/users/${userId}/words/${wordId}`, data, config);
};

//получить слова по группе и странице
export const requestWords = (group = 0, page = 0): AxiosPromise =>
  axios.get(`${baseUrl}/words?group=${group}&page=${page}`);

//получить все сложные слова
export const requestDifficultWords = (): AxiosPromise<Response> => {
  const id = localStorage.rslangUserId;

  return axios.get(
    `${baseUrl}/users/${id}/aggregatedWords?wordsPerPage=3600&filter={"userWord.difficulty":"hard"}`,
    config
  );
};

//получить изученные слова на странице
export const requestLearnedWords = (group: number, page: number): AxiosPromise<Response> => {
  const id = localStorage.rslangUserId;

  return axios.get(
    `${baseUrl}/users/${id}/aggregatedWords?group=${group}&wordsPerPage=600&filter={"userWord.difficulty":"learned"}`,
    config
  );
};

//получить пользовательское слово
export const getUserWord = async (wordId: string): Promise<Response> => {
  const userId = getUserId();

  const response = await fetch(`${baseUrl}/users/${userId}/words/${wordId}`, {
    method: 'GET',
    headers: config.headers
  });

  return response;
};

//удалить пользовательское слово
export const deleteUserWord = (wordId: string): AxiosPromise<Response> => {
  const userId = getUserId();

  return axios.delete(`${baseUrl}/users/${userId}/words/${wordId}`, config);
};
