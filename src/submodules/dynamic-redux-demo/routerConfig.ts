import DynamicReduxIndexRouteView from './views/DynamicReduxIndexRouteView';
import PageARouteView from './views/PageARouteView';
import PageBRouteView from './views/PageBRouteView';
import { RouterConfigInterface } from '@/@types';
const routerConfig: RouterConfigInterface = [
  {
    showTitle: '异步Rexux',
    iconName: 'AppstoreOutlined',
    view: DynamicReduxIndexRouteView,
    path: 'index',
    hideInMenu: true
  },
  {
    showTitle: '页面 A',
    iconName: 'AppstoreOutlined',
    view: PageARouteView,
    path: 'page-a'
  },
  {
    showTitle: '页面 B',
    iconName: 'AppstoreOutlined',
    view: PageBRouteView,
    path: 'page-b'
  }
];
export default routerConfig;
