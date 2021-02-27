import CalendarRouteView from './views/CalendarRouteView';
import SuccessPage from './views/result-page/SuccessPage';
import FailPage from './views/result-page/FailPage';
import ExceptionPage_403 from './views/exception-page/403';
import ExceptionPage_404 from './views/exception-page/404';
import ExceptionPage_500 from './views/exception-page/500';
import { RouterConfigInterface } from '@/@types';
const routerConfig: RouterConfigInterface = [
  {
    showTitle: '日历',
    iconName: 'CalendarOutlined',
    view: CalendarRouteView,
    path: 'calendar'
  },
  {
    showTitle: '结果页',
    iconName: 'CheckCircleOutlined',
    children: [
      {
        showTitle: '成功页',
        view: SuccessPage,
        path: 'success'
      },
      {
        showTitle: '失败页',
        view: FailPage,
        path: 'fail'
      }
    ],
    path: 'result'
  },
  {
    showTitle: '异常页',
    iconName: 'WarningOutlined',
    children: [
      {
        showTitle: '403',
        view: ExceptionPage_403,
        path: '403'
      },
      {
        showTitle: '404',
        view: ExceptionPage_404,
        path: '404'
      },
      {
        showTitle: '500',
        view: ExceptionPage_500,
        path: '500'
      }
    ],
    path: 'exception'
  }
];
export default routerConfig;
