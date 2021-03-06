import React from 'react';
import DashboardModuleRoutes from './routers';
import moduleConfig from './moduleConfig';
class SubmoduleEntry extends React.Component {
  render() {
    return <DashboardModuleRoutes modulePath={`/${moduleConfig.modulePath}`} />;
  }
}

export default SubmoduleEntry;
