import httpRequest from '../utils/httpRequest';

type ParamsType = {
  kw?: string;
};
export const MODEL_URL = 'payment-statuses';

export const getPaymentStatusList = (params: ParamsType) => {
  const url = MODEL_URL + '/';

  return httpRequest.get(url, { params: params });
};

export const getPaymentStatusById = (id: number | string) => {
  const url = MODEL_URL + `/${id}/`;

  return httpRequest.get(url);
};
