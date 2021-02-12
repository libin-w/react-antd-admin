/*
 * @Author: WangLibin
 * @Date: 2021-02-08 18:18:54
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-09 10:51:38
 * @Description: SystemNoticeAction
 */
import { FC, useEffect, ReactNode } from 'react';
import { Avatar, Empty, Badge, Dropdown, List, Tabs, Tooltip } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import styled from 'styled-components';
const { TabPane } = Tabs;
interface StylePropsType {}
const BodyStyle = styled.div.attrs({
  onClick: (e) => {
    e.stopPropagation();
  }
})<StylePropsType>`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 6px 16px -8px rgb(0 0 0 / 8%), 0 9px 28px 0 rgb(0 0 0 / 5%),
    0 12px 48px 16px rgb(0 0 0 / 3%);
  width: 320px;
  .empty-wrapper {
    min-height: 160px;
    overflow: hidden;
  }
  .ant-list-footer {
    padding: 0px;
  }
  .handle-btn-wrapper {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.85);
    line-height: 42px;
    text-align: center;
    .handle-btn {
      flex: 1;
      cursor: pointer;
      border-right: 1px solid #f0f0f0;
      &:nth-last-child(1) {
        border-right: 0px;
      }
    }
  }
`;
const TabPaneContent: FC<{
  dataSource?: any[];
  empty?: ReactNode;
  footer?: ReactNode;
}> = ({ dataSource = [], empty, footer }) => {
  if (dataSource.length === 0) {
    return (
      <div className="empty-wrapper">{empty || <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}</div>
    );
  }
  return (
    <List
      itemLayout="horizontal"
      size="small"
      dataSource={dataSource}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={<a href="https://ant.design">{item.title}</a>}
            description={item.title}
          />
        </List.Item>
      )}
      footer={footer}
    />
  );
};
const SystemNoticeAction: FC<{}> = () => {
  return (
    <Dropdown
      trigger={['click']}
      placement="bottomRight"
      overlay={
        <BodyStyle>
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="通知" key="1">
              <TabPaneContent
                dataSource={[
                  {
                    title: 'Ant Design Title 1'
                  },
                  {
                    title: 'Ant Design Title 2'
                  },
                  {
                    title: 'Ant Design Title 3'
                  },
                  {
                    title: 'Ant Design Title 4'
                  }
                ]}
                footer={
                  <div className="handle-btn-wrapper">
                    <div className="handle-btn">清空数据</div>
                    <div className="handle-btn">查看更多</div>
                  </div>
                }
              />
            </TabPane>
            <TabPane tab="消息" key="2">
              <TabPaneContent
                empty={<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="没有数据" />}
              />
            </TabPane>
            <TabPane tab="待办" key="3">
              <TabPaneContent />
            </TabPane>
          </Tabs>
        </BodyStyle>
      }
    >
      <div className="antd-admin-header-right-action-item">
        <Badge
          style={{ boxShadow: 'none' }}
          offset={[6, 2]}
          size="small"
          count={19}
          overflowCount={9}
        >
          <BellOutlined className="notice-icon" />
        </Badge>
      </div>
    </Dropdown>
  );
};

export default SystemNoticeAction;
