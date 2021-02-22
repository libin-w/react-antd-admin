import React, { FC, useMemo, useEffect } from 'react';
import { Switch, useLocation, useHistory } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import NotFoundPageRouteView from '@/views/NotFoundPageRouteView';
import { usePersistFn } from 'ahooks';
import { isExternalLink } from '@/utils';
import { ReactComponentType, RouterConfigInterface, ModuleConfigInterface } from '@/@types';
interface PropsTypes {
  moduleConfig: ModuleConfigInterface;
  routerConfig: RouterConfigInterface;
}
const SubmoduleRouter: FC<PropsTypes> = ({ moduleConfig, routerConfig }) => {
  const location = useLocation();
  const history = useHistory();
  const createRouteList = usePersistFn((modulePath: string, routerList: RouterConfigInterface) => {
    const routeList: {
      path: string;
      showTitle: string;
      exact: boolean;
      component: ReactComponentType;
    }[] = [];
    const pathList: string[] = [];
    const transformData = (beginPath: string, dataList: RouterConfigInterface) => {
      for (let i = 0; i < dataList.length; i++) {
        const ele = dataList[i];
        const path = `${beginPath}/${ele.path}`;
        if (ele.view && !isExternalLink(ele.path)) {
          pathList.push(path);
          routeList.push({
            path: path,
            showTitle: ele.showTitle + '-' + moduleConfig.moduleName,
            exact: ele.exact === false ? false : true,
            component: ele.view
          });
        }
        if (Array.isArray(ele.children)) {
          transformData(path, ele.children);
        }
      }
      return dataList;
    };
    transformData(modulePath, routerList);
    return {
      reactDom: routeList.map((route) => {
        return (
          <PrivateRoute
            key={route.path}
            exact={route.exact}
            path={route.path}
            showTitle={route.showTitle}
            component={route.component}
          />
        );
      }),
      pathList: pathList
    };
  });
  const routeData = useMemo(() => {
    return createRouteList(`/${moduleConfig.modulePath}`, routerConfig);
  }, [createRouteList, routerConfig, moduleConfig]);
  useEffect(() => {
    if (location.pathname === `/${moduleConfig.modulePath}`) {
      history.replace(routeData.pathList[0]);
    }
  }, [history, location, moduleConfig, routeData]);
  return (
    <Switch>
      {routeData.reactDom}
      <PrivateRoute path="*" component={NotFoundPageRouteView} />
    </Switch>
  );
};

export default SubmoduleRouter;
