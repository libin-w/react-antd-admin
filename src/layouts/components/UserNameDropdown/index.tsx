import { FC } from 'react';
import { Avatar, Dropdown, Menu, Modal, message } from 'antd';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootStateInterface } from '@/store';
import { GlobalLoading } from '@/components';
import { UserInfoStateInterface } from '@/store/modules/user-info/reducer';
import defaultAvatarImg from '@/assets/images/default-avatar-img.png';
import {
  AppstoreOutlined,
  LogoutOutlined,
  GithubOutlined,
  ExclamationCircleFilled
} from '@ant-design/icons';
import actions from '@/store/modules/user-info/actions';
import { AnyAction } from '@/store/types';
const { confirm } = Modal;
const UserNameDropdown: FC<{}> = () => {
  const history = useHistory();
  const dispatch = useDispatch<(action: AnyAction) => Promise<any>>();
  const userInfo = useSelector<RootStateInterface, UserInfoStateInterface>(
    (state) => state.userInfo,
    shallowEqual
  );
  const handleClickLogout = () => {
    confirm({
      title: '此操作将退出登录, 是否继续？',
      icon: <ExclamationCircleFilled />,
      okText: '确定',
      cancelText: '取消',
      getContainer: false,
      centered: true,
      onOk() {
        GlobalLoading.server.show({
          bgColor: '#fff',
          size: 'large'
        });
        dispatch(actions.logout())
          .then((res: any) => {
            message.success({
              content: '已退出登录，请重新登录！！！',
              duration: 2,
              onClose() {
                history.push('/login');
              }
            });
            console.log(res);
          })
          .catch((err: any) => {
            GlobalLoading.server.hide();
            console.log(err);
          });
      }
    });
  };
  const onClickMenu = ({ key }) => {
    switch (key) {
      case 'menu-1':
        break;
      case 'menu-2':
        break;
      case 'logout':
        handleClickLogout();
        break;

      default:
        break;
    }
  };
  return (
    <Dropdown
      placement="bottomLeft"
      overlay={
        <Menu onClick={onClickMenu}>
          <Menu.Item key="menu-1" icon={<AppstoreOutlined />}>
            菜单 1
          </Menu.Item>
          <Menu.Item key="menu-2" icon={<AppstoreOutlined />}>
            菜单 2
          </Menu.Item>
          <Menu.Item>
            <a
              href="https://github.com/libin-w/react-antd-admin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined />
              <span>Github</span>
            </a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="logout">
            <LogoutOutlined />
            <span>退出登录</span>
          </Menu.Item>
        </Menu>
      }
    >
      <div className="antd-admin-header-right-action-item">
        <Avatar size="small" className="user-avatar" src={userInfo.avatar || defaultAvatarImg} />
        <span className="username-text">{userInfo.realName}</span>
      </div>
    </Dropdown>
  );
};
export default UserNameDropdown;
