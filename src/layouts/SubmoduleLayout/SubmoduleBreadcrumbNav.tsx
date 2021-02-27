import { FC, useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Breadcrumb, Space } from 'antd';
import Icons from '@/icons';
import { ModuleConfigInterface, RouterConfigInterface } from '@/@types';

interface PropsType {
  moduleConfig: ModuleConfigInterface;
  routerConfig: RouterConfigInterface;
}
type NavListType = {
  title: string;
  key: string;
  url?: string;
}[];
const SubmoduleBreadcrumbNav: FC<PropsType> = ({ moduleConfig, routerConfig }) => {
  const location = useLocation();
  const [navList, setNavList] = useState<NavListType>([]);

  useEffect(() => {
    const pathList = location.pathname.substring(1).split('/').splice(1);
    let lastPath = '';
    let pathFragment = '';
    const navList: NavListType = [];
    let currentRouterConfig = routerConfig;
    pathList.forEach((path) => {
      const routeInfo = currentRouterConfig.find(
        (route) => route.path.indexOf(pathFragment + path) === 0
      );
      if (routeInfo) {
        navList.push({
          title: routeInfo.showTitle,
          key: `${lastPath}/${path}`,
          url: routeInfo.view ? `${lastPath}/${path}` : ''
        });
        if (Array.isArray(routeInfo.children)) {
          currentRouterConfig = routeInfo.children;
          pathFragment = '';
          lastPath = `${lastPath}/${path}`;
        } else {
          currentRouterConfig = [];
        }
      } else {
        pathFragment = `${path}/`;
      }
    });
    setNavList(navList);
  }, [location, routerConfig]);
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <NavLink exact to={`/${moduleConfig.modulePath}`}>
          <Space size={4}>
            {moduleConfig.iconName && Icons[moduleConfig.iconName]?.({})}
            {moduleConfig.moduleName}
          </Space>
        </NavLink>
      </Breadcrumb.Item>
      {navList.map((navItem, index) => {
        return (
          <Breadcrumb.Item key={navItem.key}>
            {navItem.url && navList.length !== index + 1 ? (
              <NavLink exact to={`/${moduleConfig.modulePath}${navItem.url}`}>
                {navItem.title}
              </NavLink>
            ) : (
              navItem.title
            )}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};
export default SubmoduleBreadcrumbNav;
