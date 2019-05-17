import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const BASE_URL = 'http://127.0.0.1:8000/api/v1'

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
