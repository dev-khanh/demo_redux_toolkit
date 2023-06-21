import {API_URL} from '@env';
import axios from 'axios';
import _ from 'lodash';

import {keysToCamel} from '../utils/helper';

const api = axios.create({
  baseURL: API_URL,
  timeout: 200000,
});
const fetchAllData = async ({method, url, params, data, headers, ...rest}) => {
  // const authorization = await authorizationHeader()
  // const headersWithAuth = { ...headers, ...authorization }
  try {
    const response = await api({
      method,
      url,
      params,
      data,
      // headers: headersWithAuth,
      ...rest,
    });
    // if (response.status > 299) throw new Error(response.message || MESSAGES.SOMETHING_WENT_WRONG)
    // if (!_.get(response, 'data')) throw new Error(response.message || MESSAGES.SOMETHING_WENT_WRONG)
    return keysToCamel(_.get(response, 'data'));
  } catch (e) {
    // handleAuthorizationError(e)
    // throw new Error(MESSAGES.SOMETHING_WENT_WRONG)
  }
};
export const getMenus = () =>
  fetchAllData({
    method: 'get',
    url: '/todos/1',
  });
