import { FC } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { hasToken } from '@/utils/accessToken';
import { ReactComponentType, AccessValueType } from '@/@types';
import { useDocumentTitle } from '@/hooks';
import { splicedDocumentTitle } from '@/utils';
import isPermitted from '@/utils/permission';

export interface PrivateRouteProps extends RouteProps {
  showTitle?: string;
  accessValue?: AccessValueType;
  component: ReactComponentType;
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  showTitle,
  accessValue,
  ...rest
}) => {
  useDocumentTitle(showTitle ? splicedDocumentTitle(showTitle) : '', {
    restoreOnUnmount: true,
    validString: true
  });
  return (
    <Route
      {...rest}
      render={(props) => {
        if (hasToken()) {
          return isPermitted(accessValue) ? <Component {...props} /> : <Redirect to="/403" />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                search: `?redirectUrl=${window.encodeURIComponent(window.location.href)}`
              }}
            />
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
