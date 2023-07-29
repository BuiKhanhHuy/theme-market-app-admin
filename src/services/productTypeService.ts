import httpRequest from '../utils/httpRequest';

type ParamsType = {
  page?: number | string;
  pageSize?: number | string;
  sortField?: string;
  sortOrder?: string;
  q?: string;
};
export const MODEL_URL = 'product-types';

export const getProductTypeList = (params: ParamsType) => {
  const url = MODEL_URL + '/';

  return httpRequest.get(url, { params: params });
};

export const getProductTypeById = (id: number | string) => {
  const url = MODEL_URL + `/${id}/`;

  return httpRequest.get(url);
};

export const addProductType = (data: any) => {
  const url = MODEL_URL + '/';

  return httpRequest.post(url, data);
};

export const updateProductTypeById = (id: number | string, data: any) => {
  const url = MODEL_URL + `/${id}/`;

  return httpRequest.put(url, data);
};

export const deleteProductTypeById = (id: number | string) => {
  const url = MODEL_URL + `/${id}/`;

  return httpRequest.delete(url);
};

export const deleteProductTypeWithIdList = (data: { idList: number[] }) => {
  const url = MODEL_URL + `/delete-many`;

  return httpRequest.post(url, data);
};

