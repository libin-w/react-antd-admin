/*
 * @Author: WangLibin
 * @Date: 2021-01-18 15:44:02
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-09 11:17:42
 * @Description: MainLayout
 */
import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BackTop, Layout, Tooltip } from 'antd';
import { scrollTo } from '@/utils';
import { QuestionCircleOutlined } from '@ant-design/icons';
import MainRoute from '@/routers/MainRoute';
import Logo from '../components/Logo';
import SiteSearch from '../components/SiteSearch';
import HeaderMenu from '../components/HeaderMenu';
import UserNameDropdown from '../components/UserNameDropdown';
import LocalErrorLogEntry from '../components/LocalErrorLogEntry';
import SystemNoticeAction from '../components/SystemNoticeAction';

const { Header } = Layout;

const MainLayout: FC<{}> = () => {
  const location = useLocation();
  useEffect(() => {
    scrollTo(0, {
      duration: 0
    });
  }, [location]);
  return (
    <Layout className="antd-admin-main-layout-wrapper">
      <Header className="antd-admin-fixed-header">
        <div className="antd-admin-header-left">
          <Logo />
        </div>
        <div className="antd-admin-header-menu-wrapper">
          <HeaderMenu />
        </div>
        <div className="antd-admin-header-right">
          <div className="antd-admin-header-right-content">
            <SiteSearch />
            <Tooltip placement="bottom" title="使用说明">
              <a
                className="antd-admin-header-right-action-item"
                href="https://ant-design.gitee.io/components/overview-cn/"
                rel="noreferrer"
                target="_blank"
              >
                <QuestionCircleOutlined />
              </a>
            </Tooltip>

            <LocalErrorLogEntry />
            <SystemNoticeAction />
            <UserNameDropdown />
          </div>
        </div>
      </Header>
      <div className="antd-admin-main-content">
        <MainRoute />
      </div>
      <BackTop
        visibilityHeight={400}
        style={{
          right: '32px'
        }}
      />
    </Layout>
  );
};
export default MainLayout;
