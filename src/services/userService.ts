import httpRequest from '../utils/httpRequest';

type ParamsType = {
  kw?: string;
  professionId?: number | null;
  roleName?: string | null;
  isEmailVerified?: boolean | null;
  isActive?: boolean | null;
};

export const MODEL_URL = 'users';

export const getUserList = (params: ParamsType) => {
  const url = MODEL_URL + '/';

  return httpRequest.get(url, { params: params });
};

//   addEducationsDetail: (data) => {
//     const url = `api/info/web/educations-detail/`;

//     return httpRequest.post(url, data);
//   },

export const getUserById = (id: number | string) => {
  const url = MODEL_URL + `/${id}/`;

  return httpRequest.get(url);
};

//   updateEducationDetailById: (id: IdType, data) => {
//     const url = `api/info/web/educations-detail/${id}/`;

//     return httpRequest.put(url, data);
//   },

//   deleteEducationDetailById: (id: IdType) => {
//     const url = `api/info/web/educations-detail/${id}/`;

//     return httpRequest.delete(url);
//   },
