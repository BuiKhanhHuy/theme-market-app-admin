import axios from 'axios';
import queryString from 'query-string';

const httpRequest = axios.create({
  baseURL:  'http://localhost:8000/v1/admin/',
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: {
    serialize: (params) => {
      return queryString.stringify(params, { arrayFormat: 'bracket' });
    },
  },
});

httpRequest.interceptors.request.use(
  (config) => {
    // const accessToken = tokenService.getAccessTokenFromCookie();

    // if (accessToken && !notAuthenticationURL.includes(config.url)) {
    //   config.headers['Authorization'] = `Bearer ${accessToken}`;
    // }
    config.headers['Authorization'] = `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwiaWF0IjoxNjkwMTMxODI0LCJleHAiOjE2OTI3MjM4MjR9.7qY6-ZCgUIipAtVY7AQqofuOXmoWm45QOsbuId97QZo"}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpRequest.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default httpRequest;