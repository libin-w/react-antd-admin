import scrollTo from 'antd/lib/_util/scrollTo';
import { removeToken } from '@/utils/accessToken';
const {
  NODE_ENV = 'production',
  REACT_APP_DEPLOY_PATH = '/',
  REACT_APP_SYSTEM_TITLE = '运营管理平台'
} = process.env;
export const splicedDocumentTitle = (title?: string): string => {
  if (title) {
    return title + '-' + REACT_APP_SYSTEM_TITLE;
  } else {
    return REACT_APP_SYSTEM_TITLE;
  }
};
export const getBaseName = (): string => {
  if (NODE_ENV === 'production') {
    return REACT_APP_DEPLOY_PATH;
  } else {
    return '/';
  }
};
/**
 * 防抖函数
 * @param fun - 待执行函数
 * @param wait - 等待时间
 */
export const debounce = (fun: Function, wait: number) => {
  let timeout: number;
  return function (...args: any) {
    // @ts-ignore
    const context = this;
    clearTimeout(timeout);
    timeout = window.setTimeout(function () {
      fun.apply(context, args);
    }, wait);
  };
};
/**
 * 节流函数
 * @param fun - 需要执行的函数
 * @param interval - 时间间隔
 */
export const throttle = (fun: Function, interval: number) => {
  let _lastTime = -1;
  return function () {
    let nowTime = new Date().getTime();
    // @ts-ignore
    const context = this;
    if (_lastTime === -1 || nowTime - _lastTime >= interval) {
      fun.apply(context, arguments);
      _lastTime = nowTime;
    }
  };
};
export const slicePathname = (pathname: string): string[] => {
  const pathList: string[] = [];
  const getString = (curStr: string) => {
    pathList.push(curStr);
    const lastIndex = curStr.lastIndexOf('/');
    if (lastIndex > 0) {
      getString(curStr.slice(0, lastIndex));
    }
  };
  getString(pathname);
  return pathList;
};
export function isFunction(obj: any): obj is Function {
  return typeof obj === 'function';
}
export function isValidString(string: any): boolean {
  return typeof string === 'string' && string.replace(/\s+/g, '').length > 0;
}

export const randomInteger = (...args: [number] | [number, number]) => {
  let min: number, max: number;
  if (args.length === 1) {
    min = 0;
    max = args[0];
  } else {
    min = args[0];
    max = args[1];
  }
  if (min > max) {
    min = (max ^= min ^= max) ^ min;
    // [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 清除缓存数据并跳转到登录页
 */
export const logoutAndClaerData = (noRecord = false) => {
  removeToken();
  if (noRecord) {
    window.location.href = `${getBaseName()}login`;
  } else {
    window.location.href = `${getBaseName()}login?redirect_url=${window.location.pathname}`;
  }
};
/**
 * 判断是否为外部链接
 * @param url - 链接
 */
export const isExternalLink = (url: string): boolean => {
  if (typeof url === 'string') {
    return /^http(s)?:\/\/(\S)+\.(\S)+/.test(url);
  }
  return false;
};
export { scrollTo };
