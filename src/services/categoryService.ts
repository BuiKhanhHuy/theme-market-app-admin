import httpRequest from '../utils/httpRequest';

type ParamsType = {
  page?: number | string;
  pageSize?: number | string;
  sortField?: string;
  sortOrder?: string;
  q?: string;
};
export const MODEL_URL = 'categories';

export const getCategoryList = (params: ParamsType) => {
  const url = MODEL_URL + '/';

  return httpRequest.get(url, { params: params });
};

export const getCategoryById = (id: number | string) => {
  const url = MODEL_URL + `/${id}/`;

  return httpRequest.get(url);
};

export const addCategory = (data: any) => {
  const url = MODEL_URL + '/';

  return httpRequest.post(url, data);
};

export const updateCategoryById = (id: number | string, data: any) => {
  const url = MODEL_URL + `/${id}/`;

  return httpRequest.put(url, data);
};

export const deleteCategoryById = (id: number | string) => {
  const url = MODEL_URL + `/${id}/`;

  return httpRequest.delete(url);
};

export const deleteCategoryWithIdList = (data: { idList: number[] }) => {
  const url = MODEL_URL + `/delete-many`;

  return httpRequest.post(url, data);
};
