/*
 * @Author: WangLibin
 * @Date: 2021-01-19 16:05:40
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-08 15:23:07
 * @Description: moduleConfigInterface
 */
export type AccessValueType = Array<number | string | Array<number | string>> | undefined;
export interface ModuleConfigInterface {
  moduleName: string;
  modulePath: string;
  iconName?: string;
  sort?: number;
  hideInMenu?: boolean /** 默认值 false */;
  noRegister?: boolean /** 默认值 false */;
  access?: AccessValueType;
}
