/*
 * @Author: WangLibin
 * @Date: 2021-01-18 15:44:02
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-07 17:02:41
 * @Description: applicationReducer
 */

import Immutable from 'seamless-immutable';
import { AnyAction } from 'redux';
import { ModuleConfigInterface } from '@/@types/moduleConfig';
import types from './types';
export interface SubmoduleConfigItemType extends ModuleConfigInterface {
  sort: number;
  key: string;
}
/**
 * 获取 submodules 目录下所有子模块配置
 */

const submoduleFiles = require.context('@/submodules/', true, /moduleConfig\.ts/);

const submoduleConfigList: SubmoduleConfigItemType[] = [];
submoduleFiles.keys().forEach((modulePath) => {
  const moduleItem = submoduleFiles(modulePath).default as ModuleConfigInterface;
  if (moduleItem.noRegister !== true) {
    submoduleConfigList.push({
      ...moduleItem,
      sort: moduleItem.sort ?? 100,
      key: modulePath.replace(/^\.\/(.*)\/moduleConfig\.ts/, '$1')
    });
  }
});
submoduleConfigList.sort((a, b) => {
  return a.sort - b.sort;
});
export type ApplicationReducerType = Immutable.ImmutableObject<{
  submoduleConfigList: SubmoduleConfigItemType[];
}>;

const initialState: ApplicationReducerType = Immutable({
  submoduleConfigList: submoduleConfigList
});
// reducer
export default function reducer(
  state: ApplicationReducerType = initialState,
  action: AnyAction
): ApplicationReducerType {
  switch (action.type) {
    default:
      return state;
  }
}
