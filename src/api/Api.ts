import Axios, {AxiosRequestConfig, AxiosResponseTransformer} from 'axios';

const axiosConfig: AxiosRequestConfig = {
  // we can setup part of endpoints url for make code more cleaner
  // baseURL: 'some API_URL',
  transformResponse: [
    ...(Axios.defaults.transformResponse as AxiosResponseTransformer[]),
  ],
};

const axios = Axios.create(axiosConfig);

export const Api = {
  getPeople() {
    return axios.get('https://swapi.dev/api/people');
  },

  getPersoneById(id: number) {
    return axios.get(`https://swapi.dev/api/people/${id}`);
  },

  getPersonByUrl(url: string) {
    return axios.get(url);
  },
};
