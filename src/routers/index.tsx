/*
 * @Author: WangLibin
 * @Date: 2021-02-07 09:50:41
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-07 10:23:08
 * @Description: AppRoute
 */
import { FC, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UnifiedSuspense } from '@/components';
import MainLayout from '@/layouts/MainLayout';
import PrivateRoute from './PrivateRoute';
import LoginRouteView from '@/views/LoginRouteView';
import NotFoundPage from '@/views/NotFoundPage';
import DemoRouteView from '@/views/DemoRouteView';
import { getBaseName } from '@/utils/index';
const ErrorLogPage = lazy(
  () =>
    import(/* webpackChunkName: "gather-error-log-page" */ '@/gather-error-log/pages/ErrorLogPage')
);
const AppRoute: FC<{}> = () => {
  return (
    <UnifiedSuspense>
      <Switch>
        <Route path="/login" component={LoginRouteView} />
        <Route path="/demo" component={DemoRouteView} />
        <Route path="/404" component={NotFoundPage} />
        <Route
          exact
          path="/local-error-log"
          component={() => <ErrorLogPage closePath={getBaseName()} />}
        />
        <PrivateRoute path="/" component={MainLayout} />
      </Switch>
    </UnifiedSuspense>
  );
};

export default AppRoute;
