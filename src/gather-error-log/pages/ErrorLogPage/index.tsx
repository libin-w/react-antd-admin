/*
 * @Author: WangLibin
 * @Date: 2021-02-07 09:50:41
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-08 15:45:20
 * @Description: ErrorLogPage
 */
import { FC, useState } from 'react';
import { PageHeader, Tabs, Button, Card, Modal } from 'antd';
import { LogoutOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import AjaxError from './AjaxError';
import LazyComponentError from './LazyComponentError';
import ComponentRuntimeError from './ComponentRuntimeError';
import styles from './style.module.scss';
const { TabPane } = Tabs;
const tabListData = [
  {
    key: '1',
    title: 'AJAX',
    content: <AjaxError />
  },
  {
    key: '2',
    title: 'LazyComponent',
    content: <LazyComponentError />
  },
  {
    key: '3',
    title: 'RuntimeError',
    content: <ComponentRuntimeError />
  }
];
const ErrorLogPage: FC<{
  closePath?: string;
}> = ({ closePath }) => {
  const [activeKey, setActiveKey] = useState<string>(tabListData[0].key);
  return (
    <div className={styles.error_log_page}>
      <PageHeader
        className={styles.error_log_page_header}
        title="错误日志"
        ghost={false}
        extra={[
          <Button
            key="1"
            type="primary"
            icon={<LogoutOutlined />}
            onClick={() => {
              Modal.confirm({
                title: '确定退出该页面吗?',
                icon: <ExclamationCircleOutlined />,
                centered: true,
                getContainer: false,
                okText: '确定',
                cancelText: '取消',
                onOk() {
                  window.location.replace(closePath || '/');
                }
              });
            }}
          >
            退出
          </Button>
        ]}
        footer={
          <Tabs
            activeKey={activeKey}
            onChange={(key) => {
              setActiveKey(key);
            }}
          >
            {tabListData.map((tab) => (
              <TabPane tab={tab.title} key={tab.key} />
            ))}
          </Tabs>
        }
      ></PageHeader>
      <Card>{tabListData.find((tab) => tab.key === activeKey)?.content}</Card>
    </div>
  );
};
export default ErrorLogPage;
