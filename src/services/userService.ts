import httpRequest from '../utils/httpRequest';

type ParamsType = {
  kw?: string;
  professionId?: number | null;
  roleName?: string | null;
  isEmailVerified?: boolean | null;
  isActive?: boolean | null;
};

const userService = {
  getUserList: (params: ParamsType) => {
    const url = 'users/';

    return httpRequest.get(url, { params: params });
  },
  //   addEducationsDetail: (data) => {
  //     const url = `api/info/web/educations-detail/`;

  //     return httpRequest.post(url, data);
  //   },
  getUserById: (id: number | string) => {
    const url = `users/${id}/`;

    return httpRequest.get(url);
  },
  //   updateEducationDetailById: (id: IdType, data) => {
  //     const url = `api/info/web/educations-detail/${id}/`;

  //     return httpRequest.put(url, data);
  //   },
  //   deleteEducationDetailById: (id: IdType) => {
  //     const url = `api/info/web/educations-detail/${id}/`;

  //     return httpRequest.delete(url);
  //   },
};

export default userService;
