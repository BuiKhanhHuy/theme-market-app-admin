import httpRequest from '../utils/httpRequest';

type ParamsType = {
  page?: number | string;
  pageSize?: number | string;
  sortField?: string;
  sortOrder?: string;
  q?: string;
};
export const MODEL_URL = 'timelines';

export const getTimelineList = (params: ParamsType) => {
  const url = MODEL_URL + '/';

  return httpRequest.get(url, { params: params });
};

export const getTimelineById = (id: number | string) => {
  const url = MODEL_URL + `/${id}/`;

  return httpRequest.get(url);
};

export const addTimeline = (data: any) => {
  const url = MODEL_URL + '/';

  return httpRequest.post(url, data);
};

export const updateTimelineById = (id: number | string, data: any) => {
  const url = MODEL_URL + `/${id}/`;

  return httpRequest.put(url, data);
};

export const deleteTimelineById = (id: number | string) => {
  const url = MODEL_URL + `/${id}/`;

  return httpRequest.delete(url);
};

export const deleteTimelineWithIdList = (data: { idList: number[] }) => {
  const url = MODEL_URL + `/delete-many`;

  return httpRequest.post(url, data);
};

