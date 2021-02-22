import axios, {
  CancelTokenSource,
  AxiosRequestConfig,
  AxiosInstance,
  AxiosPromise,
  AxiosResponse,
  AxiosInterceptorManager
} from 'axios';
import { Modal, message } from 'antd';
import { getToken, setToken } from '@/utils/accessToken';
import { logoutAndClaerData, getBaseName } from '@/utils';

export interface CustomAxiosPromise<T = any> extends AxiosPromise<T> {
  cancel?: (message?: string) => void;
  isCancel?: (error: any) => boolean;
}
export interface SuccessResponseData<T = any> {
  code: string | number;
  data: T;
  message: string;
  [propName: string]: any;
}
export interface CustomFinalAxiosPromise<T = any> extends Promise<SuccessResponseData<T>> {
  cancel?: (message?: string) => void;
  isCancel?: (error: any) => boolean;
}
export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  __codeWhiteList__?: Array<number | string>;
  __statusKey__?: string;
  __noMessage__?: boolean; // 取消系统弹窗，可自定义弹窗提示
  __identify__?: number | string;
  __timeoutCallback__?: () => void;
}
export interface CustomAxiosResponse<T = any> extends AxiosResponse<T> {
  config: CustomAxiosRequestConfig;
}
export interface CustomAxiosInstance extends AxiosInstance {
  (config: CustomAxiosRequestConfig): CustomFinalAxiosPromise;
  defaults: CustomAxiosRequestConfig;
  interceptors: {
    request: AxiosInterceptorManager<CustomAxiosRequestConfig>;
    response: AxiosInterceptorManager<CustomAxiosResponse>;
  };
}

export const createCancelSource = (): CancelTokenSource => {
  return axios.CancelToken.source();
};
export const isCancel: (value: any) => boolean = axios.isCancel;
export const baseURL =
  process.env.NODE_ENV === 'development' ? '/api/' : `${process.env.REACT_APP_AXIOS_BASE_URL}/api/`;
const successCode = '200'; // 默认请求成功CODE码
let reLoginTimer: number | null = null;
const reLogin = () => {
  reLoginTimer && clearTimeout(reLoginTimer);
  reLoginTimer = window.setTimeout(() => {
    message.error({
      content: '登录已失效，请重新登录',
      duration: 2,
      onClose: () => {
        logoutAndClaerData();
      }
    });
  }, 300);
};
// create an axios instance
const AXIOS_SERVICE = axios.create({
  baseURL: baseURL,
  timeout: 60000
}) as CustomAxiosInstance;
AXIOS_SERVICE.interceptors.request.use(
  (config) => {
    const Authorization = getToken();
    if (Authorization) {
      config.headers['Authorization'] = Authorization;
    }
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

AXIOS_SERVICE.interceptors.response.use(
  (response) => {
    const { data, config, headers } = response;
    const __statusKey__ = config.__statusKey__ || 'code';
    const codeWhiteList = Array.isArray(config.__codeWhiteList__)
      ? [...config.__codeWhiteList__, successCode]
      : [successCode];
    if (headers['refresh-token']) {
      setToken(headers['refresh-token']);
    }
    if (codeWhiteList.includes(data?.[__statusKey__]) /** 接口请求成功 */) {
      config.__identify__ && (data.__identify__ = config.__identify__); // 写入请求标识
      return data;
    }
    if (config.__noMessage__ === true) {
      return Promise.reject(data);
    }

    /**
     * 异常处理
     */
    console.log(data, 3333333);
    switch (data?.[__statusKey__]) {
      case '40001' /** 重新登录 */:
        reLogin();
        return Promise.reject(data);

      default:
        message.error(data?.message || '请求出错啦。。。');
        return Promise.reject(data);
    }
  },
  (error) => {
    /** 处理请求超时，传入 callback 时，执行callback */
    if (
      /^timeout/.test(error.message) &&
      typeof error?.config?.__timeoutCallback__ === 'function'
    ) {
      Modal.warning({
        title: '请求超时，请重试',
        zIndex: 9999,
        centered: true,
        okText: '重试',
        onOk: () => {
          typeof error?.config?.__timeoutCallback__ === 'function' &&
            error.config.__timeoutCallback__();
        }
      });
      return Promise.reject(error);
    }
    const errorApi = error?.config?.url;
    isCancel(error) !== true &&
      (window.location.href = errorApi
        ? `${getBaseName()}500?api=${errorApi}`
        : `${getBaseName()}500`);
    return Promise.reject(error);
  }
);
export const createAxiosServer = (config: CustomAxiosRequestConfig, noCancel = false) => {
  if (noCancel === true) return AXIOS_SERVICE(config);
  const cancelSource = createCancelSource();
  const server = AXIOS_SERVICE(Object.assign({ cancelToken: cancelSource.token }, config));
  server.cancel = cancelSource.cancel;
  server.isCancel = isCancel;
  return server;
};
export default AXIOS_SERVICE;
