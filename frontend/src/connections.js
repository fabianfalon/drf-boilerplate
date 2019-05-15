import {BASE_URL} from "./dataSource";
import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export const client = axios.create({
  baseURL: BASE_URL,
  responseType: 'json'
});

export const axiosMiddlewareConfig = {
  interceptors: {
    request: [({getState}, config) => {
      const token = getState().users.token;
      if (token) {
        config.headers['Authorization'] = `JWT ${token}`
      }
      return config;
    }]
  }
};
