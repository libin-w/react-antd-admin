import { createBrowserHistory, createHashHistory } from 'history';
const {
  NODE_ENV = 'production',
  REACT_APP_DEPLOY_PATH = '/',
  REACT_APP_ROUTER_MODE = 'history'
} = process.env;
export interface HistoryConfigType {
  basename: string;
}
const historyConfig: HistoryConfigType = {
  basename: NODE_ENV === 'production' ? REACT_APP_DEPLOY_PATH : '/'
};
const history =
  REACT_APP_ROUTER_MODE === 'history'
    ? createBrowserHistory(historyConfig)
    : createHashHistory(historyConfig);
export default history;
