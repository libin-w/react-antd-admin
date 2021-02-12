/*
 * @Author: WangLibin
 * @Date: 2021-01-19 16:05:40
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-08 14:52:40
 * @Description: routerConfigInterface
 */
import React, { RouteComponentProps } from 'react';
export type RouterConfigItemInterface = {
  showTitle: string;
  path: string;
  exact?: boolean;
  hideInMenu?: boolean /** 默认值 false */;
  noRegister?: boolean /** 默认值 false */;
  iconName?: string;
  view?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  children?: RouterConfigItemInterface[];
};
export type RouterConfigInterface = RouterConfigItemInterface[];
