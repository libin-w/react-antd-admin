/*
 * @Author: WangLibin
 * @Date: 2021-01-19 16:29:20
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-01-20 15:20:40
 * @Description: routerConfig
 */

import TestPage from './views/TestPage';
import TestPage1 from './views/TestPage1';
import { RouterConfigInterface } from '@/@types';
// console.log(TestPage1)
const routerConfig: RouterConfigInterface = [
  {
    showTitle: '一级菜单111',
    iconName: 'AppstoreOutlined',
    children: [
      {
        showTitle: '二级菜单111',
        children: [
          {
            showTitle: '三级菜单111',
            children: [
              {
                showTitle: '四级菜单111',
                view: TestPage,
                path: 'sss'
              }
            ],
            path: 'aaa'
          },
          {
            showTitle: '三级菜单222',
            view: TestPage,
            path: 'sss'
          }
        ],
        path: 'ddd'
      },
      {
        showTitle: '二级菜单222',
        view: TestPage,
        path: 'fff'
      }
    ],
    path: 'ggg'
  },
  {
    showTitle: '一级菜单222',
    iconName: 'AppstoreOutlined',
    view: TestPage,
    path: 'hhh'
  }
];
export default routerConfig;
