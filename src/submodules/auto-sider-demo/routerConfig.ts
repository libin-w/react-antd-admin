import BasicFormRouteView from './views/BasicFormRouteView';
import StepFormRouteView from './views/StepFormRouteView';
import AdvancedFormRouteView from './views/AdvancedFormRouteView';
import BasicDetailsPageRouteView from './views/BasicDetailsPageRouteView';
import AdvancedDetailsPageRouteView from './views/AdvancedDetailsPageRouteView';
import { RouterConfigInterface } from '@/@types';
const routerConfig: RouterConfigInterface = [
  {
    showTitle: '表单页',
    iconName: 'FormOutlined',
    children: [
      {
        showTitle: '基础表单',
        view: BasicFormRouteView,
        path: 'basic-form',
        brdgeConfig: {
          count: 'new'
        },
        access: ['admin']
      },
      {
        showTitle: '分步表单',
        view: StepFormRouteView,
        path: 'step-form'
      },
      {
        showTitle: '高级表单',
        view: AdvancedFormRouteView,
        path: 'advanced-form'
      }
    ],
    path: 'form-page'
  },
  {
    showTitle: '详情页',
    iconName: 'FormOutlined',
    children: [
      {
        showTitle: '基础详情页',
        view: BasicDetailsPageRouteView,
        path: 'basic'
      },
      {
        showTitle: '高级详情页',
        view: AdvancedDetailsPageRouteView,
        path: 'advanced'
      }
    ],
    path: 'details-page'
  }
];
export default routerConfig;
