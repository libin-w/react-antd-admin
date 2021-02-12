/*
 * @Author: WangLibin
 * @Date: 2021-01-19 16:05:20
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-01-21 14:45:10
 * @Description: allTypes
 */
import React, { RouteComponentProps } from 'react';
import { ModuleConfigInterface } from './moduleConfig';
import { RouterConfigItemInterface, RouterConfigInterface } from './routerConfig';
type ReactComponentType = React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
export {
  ReactComponentType,
  ModuleConfigInterface,
  RouterConfigItemInterface,
  RouterConfigInterface
};
