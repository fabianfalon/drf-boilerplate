import axios from 'axios';
import { API_ENDPOINT } from './dataSource';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';


export const client = axios.create({
  baseURL: API_ENDPOINT,
  responseType: 'json'
});

export const axiosMiddlewareConfig = {
  interceptors: {
    request: [({getState}, config) => {
      const token = getState().account.token;
      if (token) {
        config.headers['Authorization'] = `JWT ${token}`
      }
      return config;
    }]
  }
};
