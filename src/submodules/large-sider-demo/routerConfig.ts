import BasicFormRouteView from './views/BasicFormRouteView';
import StepFormRouteView from './views/StepFormRouteView';
import AdvancedFormRouteView from './views/AdvancedFormRouteView';
import { RouterConfigInterface } from '@/@types';
const routerConfig: RouterConfigInterface = [
  {
    showTitle: '表单页',
    iconName: 'FormOutlined',
    access: ['admin'],
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
  }
];
export default routerConfig;
