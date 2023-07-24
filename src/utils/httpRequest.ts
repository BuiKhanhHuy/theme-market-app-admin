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
    // const originalConfig = error.config;

    // Access Token was expired
    if (error.response.status === 401) {
    //   tokenService.removeAccessTokenAndRefreshTokenFromCookie();
      // const refreshTokenCookie = tokenService.getRefreshTokenFromCookie();

      // if (!refreshTokenCookie) {
      //   return Promise.reject(error);
      // }

      // try {
      //   const resData = await httpRequest.post('api/auth/token/', {
      //     grant_type: 'refresh_token',
      //     client_id: 'VYqeXWvCcINnPhStYBKg3HJC5BeJqCZaohYlyROz',
      //     client_secret:
      //       'Buz6z6vwxy8W5QCVlxqCyfDnhFDDsGgf7N9B2lApShX1nj9hiFGyT8stTo6hSxn3ph2MttFPPfwWLUlwpaYaOjxvCjoYABdoq23EBoe5pMhF5zlUhUolwVdgQ7nuDtYG',
      //     refresh_token: refreshTokenCookie,
      //   });

      //   const { access_token: accessToken, refresh_token: refreshToken } =
      //     resData.data;

      //   tokenService.saveAccessTokenAndRefreshTokenToCookie(accessToken, refreshToken);

      //   return httpRequest(originalConfig);
      // } catch (_error) {
      //   tokenService.removeAccessTokenAndRefreshTokenFromCookie();
      //   return Promise.reject(_error);
      // }
    }

    return Promise.reject(error);
  }
);

export default httpRequest;