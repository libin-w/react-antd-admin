import { FC, ReactChild, useState, useMemo, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Layout, Menu, Badge } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { usePersistFn } from 'ahooks';
import { UnifiedSuspense } from '@/components';
import { slicePathname, isExternalLink } from '@/utils';
import Icons from '@/icons';
import { RouterConfigInterface, ModuleConfigInterface } from '@/@types';
import variablesScss from '@/assets/styles/scss-variable.module.scss';
const { Content, Sider } = Layout;
const { SubMenu } = Menu;
interface PropsTypes {
  siderType?: 'mini' | 'large' | 'auto';
  minWidth?: number | string;
  moduleConfig: ModuleConfigInterface;
  routerConfig: RouterConfigInterface;
  children: ReactChild;
}

const SubmoduleLayout: FC<PropsTypes> = ({
  minWidth,
  siderType,
  moduleConfig,
  routerConfig,
  children
}) => {
  const location = useLocation();
  const [isCollapse, setIsCollapse] = useState<boolean>(siderType === 'mini');
  const [openMenuKeys, setOpenMenuKeys] = useState<string[]>(slicePathname(location.pathname));
  const [selectedMenuKeys, setSelectedMenuKeys] = useState<string[]>(
    slicePathname(location.pathname)
  );
  const runderMenuTree = usePersistFn((beginPath: string, routerConfig: RouterConfigInterface) => {
    return routerConfig.map((route) => {
      if (route.hideInMenu === true) {
        return null;
      }
      const path = `${beginPath}/${route.path}`;
      if (isExternalLink(route.path)) {
        return (
          <Menu.Item key={route.path} icon={route.iconName ? Icons[route.iconName]?.({}) : null}>
            <a href={route.path} target="_blank" rel="noopener noreferrer">
              {route.showTitle}
            </a>
          </Menu.Item>
        );
      }
      if (route.view || route.children?.every((ele) => ele.hideInMenu === true)) {
        return (
          <Menu.Item
            key={path}
            icon={route.iconName ? Icons[route.iconName]?.({}) : null}
            style={{
              position: 'relative'
            }}
          >
            <NavLink
              exact
              to={path}
              activeStyle={{
                pointerEvents: 'none'
              }}
            >
              {route.showTitle}
              {route.brdgeConfig && (
                <span className="basics-submodule-sider-menu-badge">
                  <Badge {...route.brdgeConfig} />
                </span>
              )}
            </NavLink>
          </Menu.Item>
        );
      }
      if (Array.isArray(route.children)) {
        return (
          <SubMenu
            key={path}
            icon={route.iconName ? Icons[route.iconName]?.({}) : null}
            title={route.showTitle}
          >
            {runderMenuTree(path, route.children)}
          </SubMenu>
        );
      }
      return null;
    });
  });
  const menuChildren = useMemo(() => {
    return runderMenuTree(`/${moduleConfig.modulePath}`, routerConfig);
  }, [moduleConfig, routerConfig, runderMenuTree]);

  useEffect(() => {
    setSelectedMenuKeys(slicePathname(location.pathname));
    setOpenMenuKeys(slicePathname(location.pathname));
  }, [location]);
  useEffect(() => {
    if (siderType === 'auto') {
      setOpenMenuKeys(isCollapse ? [] : slicePathname(location.pathname));
    }
  }, [siderType, isCollapse, location]);
  const menuProps = siderType === 'mini' || isCollapse ? {} : { openKeys: openMenuKeys };
  return (
    <Layout
      className="basics-submodule-layout-wrapper"
      style={{
        minWidth: minWidth ? minWidth : 'unset'
      }}
      hasSider={true}
    >
      <div
        className={classNames('basics-submodule-sider-placeholder', {
          'is-collapsed': isCollapse
        })}
      ></div>
      <Sider
        className="basics-submodule-sider"
        width={variablesScss.siderWidth}
        collapsible={siderType === 'auto'}
        collapsed={isCollapse}
        breakpoint={siderType === 'auto' ? 'lg' : undefined}
        collapsedWidth={parseInt(variablesScss.siderCollapsedWidth)}
        theme="light"
        trigger={
          <div className="basics-submodule-sider-trigger">
            {isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        }
        onCollapse={(collapsed) => {
          setIsCollapse(collapsed);
        }}
      >
        <Menu
          className="basics-submodule-sider-menu"
          mode="inline"
          selectedKeys={selectedMenuKeys}
          onOpenChange={(openKeys) => {
            setOpenMenuKeys((openKeys as Array<string>) || []);
          }}
          onSelect={({ selectedKeys, key }) => {
            if (isExternalLink(String(key))) {
              return;
            }
            setSelectedMenuKeys((selectedKeys as Array<string>) || []);
          }}
          {...menuProps}
        >
          {menuChildren}
        </Menu>
      </Sider>
      <Content className="basics-submodule-content">
        <UnifiedSuspense>{children}</UnifiedSuspense>
      </Content>
    </Layout>
  );
};

export default SubmoduleLayout;
