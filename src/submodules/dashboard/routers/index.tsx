import { FC } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '@/routers/PrivateRoute';
import NotFoundPageRouteView from '@/views/NotFoundPageRouteView';
import DashboardRouteView from '../views/DashboardRouteView';
const DashboardModuleRoutes: FC<{
  modulePath: string;
}> = ({ modulePath }) => {
  return (
    <Switch>
      <PrivateRoute exact path={modulePath} component={DashboardRouteView} />
      <PrivateRoute path="*" component={NotFoundPageRouteView} />
    </Switch>
  );
};
export default DashboardModuleRoutes;
