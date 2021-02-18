import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BackTop, Button, Layout, Space, Tooltip, Result } from 'antd';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useMount } from 'ahooks';
import { scrollTo, logoutAndClaerData } from '@/utils';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { GlobalLoading } from '@/components';
import MainRoute from '@/routers/MainRoute';
import Logo from '../components/Logo';
import SiteSearch from '../components/SiteSearch';
import HeaderMenu from '../components/HeaderMenu';
import UserNameDropdown from '../components/UserNameDropdown';
import LocalErrorLogEntry from '../components/LocalErrorLogEntry';
import SystemNoticeAction from '../components/SystemNoticeAction';
import { RootStateInterface } from '@/store';
import { UserInfoStatusType } from '@/store/modules/user-info/reducer';
import actions from '@/store/modules/user-info/actions';

const { Header } = Layout;

const MainLayout: FC<{}> = () => {
  const dispatch = useDispatch();
  const userInfoStatus = useSelector<RootStateInterface, UserInfoStatusType>(
    (state) => state.userInfo.userInfoStatus,
    shallowEqual
  );
  const location = useLocation();
  useEffect(() => {
    scrollTo(0, {
      duration: 0
    });
  }, [location]);
  useMount(() => {
    dispatch(actions.getUserInfo());
  });

  if (userInfoStatus === 'loading') {
    return <GlobalLoading size="large" bg-color="#ffffff" />;
  } else if (userInfoStatus === 'fail') {
    return (
      <div className="antd-admin-fail-result-wrapper">
        <Result
          status="warning"
          title="获取用户信息失败，请重试或更换账号登录！"
          extra={
            <Space>
              <Button
                onClick={() => {
                  logoutAndClaerData();
                }}
              >
                更换账号
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  dispatch(actions.getUserInfo());
                }}
              >
                重试
              </Button>
            </Space>
          }
        />
      </div>
    );
  } else if (userInfoStatus === 'success') {
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
  } else {
    return null;
  }
};
export default MainLayout;
