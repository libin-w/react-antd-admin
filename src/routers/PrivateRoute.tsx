import { FC } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { NativeRouter } from '@/components';
import { hasToken } from '@/utils/accessToken';
import { ReactComponentType } from '@/@types';
import { useDocumentTitle } from '@/hooks';
import { splicedDocumentTitle, getBaseName } from '@/utils';
export interface PrivateRouteProps extends RouteProps {
  showTitle?: string;
  component: ReactComponentType;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component, showTitle, ...rest }) => {
  useDocumentTitle(showTitle ? splicedDocumentTitle(showTitle) : '', {
    restoreOnUnmount: true,
    validString: true
  });
  return (
    <Route
      {...rest}
      render={(props) => {
        if (hasToken()) {
          return <Component {...props} />;
        } else {
          return (
            <NativeRouter
              url={getBaseName() + 'login'}
              params={{
                redirectUrl: window.location.href
              }}
            />
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
