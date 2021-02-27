import history from './history';
const historyHelper = {
  push: (path: string) => {
    if (path === history.location.pathname) return;
    history.push(path);
  }
};
export default historyHelper;
