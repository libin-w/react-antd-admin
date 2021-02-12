/*
 * @Author: WangLibin
 * @Date: 2021-02-09 11:10:47
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-09 11:12:07
 * @Description: UserNameDropdown
 */
import { FC } from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import defaultAvatarImg from '@/assets/images/default-avatar-img.png';
import { AppstoreOutlined, LogoutOutlined } from '@ant-design/icons';
const UserNameDropdown: FC<{}> = () => {
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
        <Avatar size="small" className="user-avatar" src={defaultAvatarImg} />
        <span className="username-text">User Name</span>
      </div>
    </Dropdown>
  );
};
export default UserNameDropdown;
