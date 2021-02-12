const { NODE_ENV, REACT_APP_RUNTIME_ENV } = process.env;
/**
 * 是否禁用 DEVTOOLS
 */
export const devtoolsIsDisabled = (): boolean => {
  if (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'function') {
    return true;
  }
  if (NODE_ENV === 'production' && REACT_APP_RUNTIME_ENV === 'production') {
    return true;
  }
  return false;
};
