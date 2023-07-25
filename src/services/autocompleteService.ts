import httpRequest from '../utils/httpRequest';

export const getOptionsByModel = (modelUrl: string) => {
  const url = modelUrl + '/autocomplete';

  return httpRequest.get(url);
};
