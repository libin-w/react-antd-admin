/*
 * @Author: WangLibin
 * @Date: 2021-02-07 09:50:41
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-08 16:51:13
 * @Description: MainRoute
 */
import React, { lazy, FC, ComponentType } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { Modal } from 'antd';
import { UnifiedSuspense } from '@/components';
import { SubmoduleConfigItemType } from '@/store/modules/application/reducer';

interface PropsTypes {}

const importSubmodulesFile = (moduleKey: string): Promise<{ default: ComponentType<any> }> => {
  return new Promise((resolve, reject) => {
    import(/* webpackChunkName: "[request]" */ `@/submodules/${moduleKey}/entry.tsx`)
      .then(resolve)
      .catch((error: any) => {
        console.log(error);
        Modal.error({
          title: '资源加载错误，请刷新页面~~~',
          keyboard: false,
          centered: true,
          okText: '好的',
          onOk: () => {
            window.location.replace(
              `${window.location.origin}${window.location.pathname}${window.location.search}${window.location.hash}`
            );
          }
        });
      });
  });
};

const MainRoute: FC<PropsTypes> = React.memo(() => {
  const submoduleConfigList = useSelector<{}, SubmoduleConfigItemType[]>(
    (state: any) => state.application.submoduleConfigList,
    shallowEqual
  );
  let redirectPath = '/403';
  if (submoduleConfigList?.[0]?.modulePath) {
    redirectPath = `/${submoduleConfigList?.[0]?.modulePath}`;
  }

  return (
    <UnifiedSuspense>
      <Switch>
        {submoduleConfigList.map((module) => {
          const { key, modulePath, moduleName } = module;
          return (
            <PrivateRoute
              key={key}
              showTitle={moduleName}
              path={`/${modulePath}`}
              component={lazy(() => importSubmodulesFile(key))}
            />
          );
        })}
        <Redirect exact from="/" to={redirectPath} />
        <Redirect from="*" to="/404" />
      </Switch>
    </UnifiedSuspense>
  );
});
export default MainRoute;
