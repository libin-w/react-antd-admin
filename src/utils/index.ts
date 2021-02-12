import scrollTo from 'antd/lib/_util/scrollTo';
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

export { scrollTo };
