import AXIOS_SERVICE from '@/utils/axios';

export interface ParamsInterfaceLogin {
  username: string;
  password: string;
}

/**
 * 登录
 * @param data 请求主体
 */
export const API_LOGIN = (data: ParamsInterfaceLogin) => {
  return AXIOS_SERVICE({
    url: 'user/login',
    method: 'post',
    data: {
      ...data
    }
  });
};

/**
 * 获取用户信息
 */
export const API_GET_USER_INFO = (timeCallback: () => void) => {
  return AXIOS_SERVICE({
    url: 'user/getUserInfo',
    method: 'get',
    __timeoutCallback__: timeCallback
  });
};

/**
 * 退出登录
 */
export const API_LOGOUT = () => {
  return AXIOS_SERVICE({
    url: 'user/logout',
    method: 'post'
  });
};
