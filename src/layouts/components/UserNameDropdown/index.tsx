import { FC } from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { useSelector, shallowEqual } from 'react-redux';
import { RootStateInterface } from '@/store';
import { UserInfoStateInterface } from '@/store/modules/user-info/reducer';
import defaultAvatarImg from '@/assets/images/default-avatar-img.png';
import { AppstoreOutlined, LogoutOutlined } from '@ant-design/icons';
const UserNameDropdown: FC<{}> = () => {
  const userInfo = useSelector<RootStateInterface, UserInfoStateInterface>(
    (state) => state.userInfo,
    shallowEqual
  );
  return (
    <Dropdown
      placement="bottomLeft"
      overlay={
        <Menu>
          <Menu.Item icon={<AppstoreOutlined />}>菜单 1</Menu.Item>
          <Menu.Item icon={<AppstoreOutlined />}>菜单 2</Menu.Item>
          <Menu.Item icon={<AppstoreOutlined />}>菜单 3</Menu.Item>
          <Menu.Divider />
          <Menu.Item icon={<LogoutOutlined />}>退出登录</Menu.Item>
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
