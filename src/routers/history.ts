import {
  createBrowserHistory,
  BrowserHistoryBuildOptions,
  createHashHistory,
  HashHistoryBuildOptions
} from 'history';
const {
  NODE_ENV = 'production',
  REACT_APP_DEPLOY_PATH = '/',
  REACT_APP_ROUTER_MODE = 'history'
} = process.env;

const historyConfig: BrowserHistoryBuildOptions | HashHistoryBuildOptions = {
  basename: NODE_ENV === 'production' ? REACT_APP_DEPLOY_PATH : '/'
};
const history =
  REACT_APP_ROUTER_MODE === 'history'
    ? createBrowserHistory(historyConfig)
    : createHashHistory(historyConfig);
export default history;
