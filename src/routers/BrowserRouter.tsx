import { FC } from 'react';
import { Router } from 'react-router';
import history from './history';

const BrowserRouter: FC<{}> = ({ children }) => {
  return <Router history={history} children={children} />;
};

export default BrowserRouter;
