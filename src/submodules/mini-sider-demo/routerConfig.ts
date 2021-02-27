import TestPage from './views/TestPage';
import TestPage1 from './views/TestPage1';
import { RouterConfigInterface } from '@/@types';
// console.log(TestPage1)
const routerConfig: RouterConfigInterface = [
  {
    showTitle: '首页',
    iconName: 'AppstoreOutlined',
    view: TestPage1,
    path: 'gfdggdfg'
  },
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
  },
  {
    showTitle: '百度首页',
    iconName: 'LinkOutlined',
    path: 'https://www.baidu.com'
  }
];
export default routerConfig;
