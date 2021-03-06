import { FC, useState } from 'react';
import { PageContentWrapper, PageContentCard, PageHeaderBlock } from '@/components';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import BaseSettingContent from './BaseSettingContent';
import SafetyConfigContent from './SafetyConfigContent';
import BindAccountContent from './BindAccountContent';
import MessageConfigContent from './MessageConfigContent';
import styles from './style.module.scss';

const contentConfig = [
  {
    key: 'base-setting',
    component: <BaseSettingContent />,
    title: '基本设置'
  },
  {
    key: 'safety-config',
    component: <SafetyConfigContent />,
    title: '安全设置'
  },
  {
    key: 'bind-account',
    component: <BindAccountContent />,
    title: '账号绑定'
  },
  {
    key: 'message-config',
    component: <MessageConfigContent />,
    title: '新消息通知'
  }
];
const UserSettingRouteView: FC<{}> = () => {
  const history = useHistory();
  const [contentKey, setContentKey] = useState<string>('base-setting');
  const currentContent = contentConfig.find((ele) => ele.key === contentKey);
  console.log(history);
  return (
    <PageContentWrapper allPadding>
      <PageHeaderBlock
        title="个人设置"
        subTitle="个人信息、账号安全，以及消息通知等设置。"
        onBack={
          history.length > 1
            ? () => {
                history.goBack();
              }
            : undefined
        }
      />
      <PageContentCard allPadding className="margin-t-base">
        <div className={styles.user_setting_container}>
          <Menu
            style={{ width: 200 }}
            selectedKeys={[contentKey]}
            mode="inline"
            onSelect={({ key }) => {
              setContentKey(key as string);
            }}
          >
            {contentConfig.map((item) => (
              <Menu.Item key={item.key}>{item.title}</Menu.Item>
            ))}
          </Menu>
          <div className={styles.setting_content}>
            <div className={styles.setting_content_title}>{currentContent?.title}</div>
            {currentContent?.component}
          </div>
        </div>
      </PageContentCard>
    </PageContentWrapper>
  );
};
export default UserSettingRouteView;
