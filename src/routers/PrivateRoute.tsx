import { FC } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { hasToken } from '@/utils/accessToken';
import { ReactComponentType } from '@/@types';
import { useDocumentTitle } from '@/hooks';
import { splicedDocumentTitle } from '@/utils';
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
