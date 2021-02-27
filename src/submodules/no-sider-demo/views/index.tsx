import { FC } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '@/routers/PrivateRoute';
import NotFoundPageRouteView from '@/views/NotFoundPageRouteView';
import DashboardRouteView from './DashboardRouteView';
import UserSettingRouteView from './UserSettingRouteView';
const NoSiderApp: FC<{
  modulePath: string;
}> = ({ modulePath }) => {
  return (
    <Switch>
      {/* <PrivateRoute exact path={modulePath} component={DashboardRouteView} /> */}
      <PrivateRoute
        exact
        path={`${modulePath}/user-setting`}
        component={UserSettingRouteView}
        showTitle="个人设置"
      />
      <Redirect exact from={modulePath} to={`${modulePath}/user-setting`} />
      <PrivateRoute path="*" component={NotFoundPageRouteView} />
    </Switch>
  );
};
export default NoSiderApp;
