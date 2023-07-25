import httpRequest from '../utils/httpRequest';

type ParamsType = {
  kw?: string;
};
export const MODEL_URL = 'payment-types';

export const getPaymentTypeList = (params: ParamsType) => {
  const url = MODEL_URL + '/';

  return httpRequest.get(url, { params: params });
};

export const getPaymentTypeById = (id: number | string) => {
  const url = MODEL_URL + `/${id}/`;

  return httpRequest.get(url);
};
