/*
 * @Author: WangLibin
 * @Date: 2021-01-22 07:11:17
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-01-29 10:29:15
 * @Description:
 */
import React from 'react';
import DashboardModuleRoutes from './routes';
import moduleConfig from './moduleConfig';
class SubmoduleEntry extends React.Component {
  render() {
    return <DashboardModuleRoutes modulePath={`/${moduleConfig.modulePath}`} />;
  }
}

export default SubmoduleEntry;
