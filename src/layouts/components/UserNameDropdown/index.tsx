import { FC } from 'react';
import { Avatar, Dropdown, Menu, message } from 'antd';
import { useSelector, shallowEqual } from 'react-redux';
import { RootStateInterface } from '@/store';
import { UserInfoStateInterface } from '@/store/modules/user-info/reducer';
import defaultAvatarImg from '@/assets/images/default-avatar-img.png';
import { AppstoreOutlined, LogoutOutlined, GithubOutlined } from '@ant-design/icons';
const UserNameDropdown: FC<{}> = () => {
  const userInfo = useSelector<RootStateInterface, UserInfoStateInterface>(
    (state) => state.userInfo,
    shallowEqual
  );
  const onClickMenu = ({ key }) => {
    message.info(`Click on item ${key}`);
    switch (key) {
      case 'menu-1':
        break;
      case 'menu-2':
        break;
      case 'logout':
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
