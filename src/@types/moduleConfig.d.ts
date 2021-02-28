import { BadgeProps } from 'antd';
export type AccessValueType = Array<number | string | Array<number | string>> | undefined;
export interface ModuleConfigInterface {
  moduleName: string;
  modulePath: string;
  iconName?: string;
  sort?: number;
  hideInMenu?: boolean /** 默认值 false */;
  noRegister?: boolean /** 默认值 false */;
  access?: AccessValueType;
  brdgeConfig?: BadgeProps;
}
