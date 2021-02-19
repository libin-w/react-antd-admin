import { useState, useEffect, useMemo } from 'react';
import { Menu } from 'antd';
import Icons from '@/icons';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { usePersistFn } from 'ahooks';
import { isExternalLink } from '@/utils';
import { SubmoduleConfigItemType } from '@/store/modules/application/reducer';

const HeaderMenu = () => {
  const location = useLocation();
  const submoduleConfigList = useSelector<{}, SubmoduleConfigItemType[]>(
    (state: any) => state.application.submoduleConfigList,
    shallowEqual
  ).filter((e) => e.hideInMenu !== true);
  const getModulePath = usePersistFn(() => {
    return (
      submoduleConfigList.find(
        (module) => location.pathname.indexOf(`/${module.modulePath}`) !== -1
      )?.modulePath || ''
    );
  });
  const [selectedKey, setSelectedKey] = useState(getModulePath());
  useEffect(() => {
    setSelectedKey(getModulePath());
  }, [location, getModulePath]);
  const menuItem = useMemo(() => {
    return submoduleConfigList.map((module: any) => {
      const { modulePath, moduleName, iconName } = module;
      return (
        <Menu.Item key={modulePath} icon={module.iconName ? Icons[iconName]?.({}) : null}>
          {isExternalLink(modulePath) ? (
            <a href={modulePath} target="_blank" rel="noopener noreferrer">
              {moduleName}
            </a>
          ) : (
            <NavLink
              to={`/${modulePath}`}
              activeStyle={{
                pointerEvents: 'none'
              }}
            >
              {moduleName}
            </NavLink>
          )}
        </Menu.Item>
      );
    });
  }, [submoduleConfigList]);
  if (submoduleConfigList.length < 1) {
    return null;
  }
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      className="antd-admin-header-menu"
      selectedKeys={[selectedKey]}
    >
      {menuItem}
    </Menu>
  );
};
export default HeaderMenu;
