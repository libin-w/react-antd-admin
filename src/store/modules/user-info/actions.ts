import types from './types';

import { setToken, removeToken } from '@/utils/accessToken';
import { API_LOGIN, ParamsInterfaceLogin, API_GET_USER_INFO, API_LOGOUT } from '@/api/user.fetch';
const actions = {
  login: (params: ParamsInterfaceLogin) => ({
    type: types.LOGIN,
    payload: API_LOGIN(params),
    effect: (res: any) => {
      setToken(res.data?.access_token || '');
    }
  }),
  logout: () => ({
    type: types.LOGIN,
    payload: API_LOGOUT(),
    effect: (res: any) => {
      res && removeToken();
    }
  }),
  getUserInfo: () => ({
    type: types.GET_USER_INFO,
    payload: API_GET_USER_INFO(() => window.location.reload())
  })
};
export default actions;
