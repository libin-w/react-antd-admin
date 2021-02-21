/*
 * @Author: WangLibin
 * @Date: 2021-01-15 16:39:38
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-07 17:10:08
 * @Description: moduleConfig
 */
import { ModuleConfigInterface } from '@/@types';
const moduleConfig: ModuleConfigInterface = {
  moduleName: 'Dashboard',
  modulePath: 'dashboard',
  iconName: 'DashboardOutlined',
  access: ['admin'],
  noRegister: false,
  hideInMenu: false,
  sort: 1
};
export default moduleConfig;
