/*
 * @Author: WangLibin
 * @Date: 2021-01-29 10:26:04
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-01-29 10:32:54
 * @Description: DashboardModuleRoutes
 */
import { FC } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '@/routers/PrivateRoute';
import NotFoundPage from '@/views/NotFoundPage';
import DashboardRouteView from '../views/DashboardRouteView';
const DashboardModuleRoutes: FC<{
  modulePath: string;
}> = ({ modulePath }) => {
  return (
    <Switch>
      <PrivateRoute exact path={modulePath} component={DashboardRouteView} />
      <PrivateRoute path="*" component={NotFoundPage} />
    </Switch>
  );
};
export default DashboardModuleRoutes;
