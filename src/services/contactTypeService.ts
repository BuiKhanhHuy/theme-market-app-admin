import httpRequest from '../utils/httpRequest';

type ParamsType = {
  kw?: string;
};
export const MODEL_URL = 'contact-types';

export const getContactTypeList = (params: ParamsType) => {
  const url = MODEL_URL + '/';

  return httpRequest.get(url, { params: params });
};

export const getContactTypeById = (id: number | string) => {
  const url = MODEL_URL + `/${id}/`;

  return httpRequest.get(url);
};
