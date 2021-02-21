import React from 'react';
import { ReactComponent as MenuHomeIcon } from './svg/menu-home.svg';

import Icon, {
  DashboardOutlined,
  AppstoreOutlined,
  AntDesignOutlined,
  LinkOutlined
} from '@ant-design/icons';
interface IProps {
  className?: string;
  style?: React.CSSProperties;
}
const Icons: {
  [propName: string]: React.FC<IProps>;
} = {
  MenuHomeIcon: (props) => <Icon component={MenuHomeIcon} {...props} />,
  DashboardOutlined: (props) => <DashboardOutlined {...props} />,
  AppstoreOutlined: (props) => <AppstoreOutlined {...props} />,
  AntDesignOutlined: (props) => <AntDesignOutlined {...props} />,
  LinkOutlined: (props) => <LinkOutlined {...props} />
};
export default Icons;
