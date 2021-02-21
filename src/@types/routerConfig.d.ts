import React, { RouteComponentProps } from 'react';
import { AccessValueType } from './moduleConfig';
export type ReactComponentType =
  | React.ComponentType<RouteComponentProps<any>>
  | React.ComponentType<any>;
export type RouterConfigItemInterface = {
  showTitle: string;
  path: string;
  exact?: boolean;
  hideInMenu?: boolean /** 默认值 false */;
  noRegister?: boolean /** 默认值 false */;
  iconName?: string;
  view?: ReactComponentType;
  children?: RouterConfigItemInterface[];
  access?: AccessValueType;
};
export type RouterConfigInterface = RouterConfigItemInterface[];
