import React, { lazy, FC, ComponentType } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import Immutable from 'seamless-immutable';
import PrivateRoute from './PrivateRoute';
import { isExternalLink } from '@/utils';
import { AccessValueType } from '@/@types';
import { Modal } from 'antd';
import { UnifiedSuspense } from '@/components';
import { SubmoduleConfigItemType } from '@/store/modules/application/reducer';
import { RootStateInterface } from '@/store';
import isPermitted from '@/utils/permission';
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
  const submoduleConfigList = useSelector<
    RootStateInterface,
    Immutable.ImmutableArray<SubmoduleConfigItemType>
  >((state) => state.application.submoduleConfigList, shallowEqual);
  let redirectPath = '/403';
  const firstModule = submoduleConfigList.find((item) => isPermitted(item.access));
  if (firstModule?.modulePath) {
    redirectPath = `/${firstModule.modulePath}`;
  }
  return (
    <UnifiedSuspense>
      <Switch>
        {submoduleConfigList.map((module) => {
          const { key, modulePath, moduleName, access } = module;
          if (isExternalLink(modulePath)) {
            return null;
          }

          return (
            <PrivateRoute
              key={key}
              showTitle={moduleName}
              accessValue={access as AccessValueType}
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
