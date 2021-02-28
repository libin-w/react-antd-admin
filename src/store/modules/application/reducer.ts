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
const submoduleConfigList: SubmoduleConfigItemType[] = [
  {
    sort: 10,
    key: 'antd-link',
    moduleName: 'Ant Design 外链',
    iconName: 'AntDesignOutlined',
    brdgeConfig: {
        count: 'new'
      },
    access: [['admin', 'aa'], 'admin'],
    modulePath: 'https://ant-design.gitee.io/index-cn'
  }
];
const submoduleFiles = require.context('@/submodules/', true, /moduleConfig\.ts/);
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
export type ApplicationStateType = Immutable.ImmutableObject<{
  submoduleConfigList: SubmoduleConfigItemType[];
}>;

const initialState: ApplicationStateType = Immutable({
  submoduleConfigList: submoduleConfigList
});
// reducer
export default function reducer(
  state: ApplicationStateType = initialState,
  action: AnyAction
): ApplicationStateType {
  switch (action.type) {
    default:
      return state;
  }
}
