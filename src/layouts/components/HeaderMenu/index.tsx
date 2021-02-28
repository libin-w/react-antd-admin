import { useState, useEffect, useMemo } from 'react';
import { Menu, Badge } from 'antd';
import Icons from '@/icons';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { usePersistFn } from 'ahooks';
import { isExternalLink } from '@/utils';
import isPermitted from '@/utils/permission';
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
    return submoduleConfigList.map((module) => {
      const { modulePath, moduleName, iconName, access, brdgeConfig } = module;

      if (isPermitted(access)) {
        return (
          <Menu.Item
            key={modulePath}
            icon={iconName ? Icons[iconName]?.({}) : null}
            style={{
              position: 'relative'
            }}
          >
            {isExternalLink(modulePath) ? (
              <a href={modulePath} target="_blank" rel="noopener noreferrer">
                {moduleName}
                {brdgeConfig && (
                  <div className="antd-admin-header-menu-badge">
                    <Badge {...brdgeConfig} />
                  </div>
                )}
              </a>
            ) : (
              <NavLink
                to={`/${modulePath}`}
                activeStyle={{
                  pointerEvents: 'none'
                }}
              >
                {moduleName}
                {brdgeConfig && (
                  <div className="antd-admin-header-menu-badge">
                    <Badge {...brdgeConfig} />
                  </div>
                )}
              </NavLink>
            )}
          </Menu.Item>
        );
      } else {
        return null;
      }
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
