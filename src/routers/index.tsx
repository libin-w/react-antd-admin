import { FC, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import BrowserRouter from './BrowserRouter';
import { UnifiedSuspense } from '@/components';
import MainLayout from '@/layouts/MainLayout';
import PrivateRoute from './PrivateRoute';
import LoginRouteView from '@/views/LoginRouteView';
import NotFoundPageRouteView from '@/views/NotFoundPageRouteView';
import PermissionDeniedRouteView from '@/views/PermissionDeniedRouteView';
import { getBaseName } from '@/utils/index';
const ErrorLogPage = lazy(
  () =>
    import(/* webpackChunkName: "gather-error-log-page" */ '@/gather-error-log/pages/ErrorLogPage')
);
const AppRoute: FC<{}> = () => {
  return (
    <UnifiedSuspense>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginRouteView} />
          <Route path="/404" component={NotFoundPageRouteView} />
          <Route path="/403" component={PermissionDeniedRouteView} />
          <Route
            exact
            path="/local-error-log"
            component={() => <ErrorLogPage closePath={getBaseName()} />}
          />
          <PrivateRoute path="/" component={MainLayout} />
        </Switch>
      </BrowserRouter>
    </UnifiedSuspense>
  );
};

export default AppRoute;
