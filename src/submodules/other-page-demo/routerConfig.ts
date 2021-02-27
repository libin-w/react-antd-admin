import TestPage from './views/TestPage';
import { RouterConfigInterface } from '@/@types';
// console.log(TestPage1)
const routerConfig: RouterConfigInterface = [
  {
    showTitle: '页面 A',
    iconName: 'AppstoreOutlined',
    view: TestPage,
    path: 'page-a'
  },
  {
    showTitle: '页面 B',
    iconName: 'AppstoreOutlined',
    view: TestPage,
    path: 'page-b'
  }
];
export default routerConfig;
