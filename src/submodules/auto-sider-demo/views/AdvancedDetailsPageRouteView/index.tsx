import { FC, useState } from 'react';
import { PageContentWrapper, PageContentCard, PageHeaderBlock } from '@/components';
import BreadcrumbNav from '../../components/AutoBreadcrumbNav';
import { Button, Tag, Dropdown, Menu, Descriptions, Tabs } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
const DropdownMenu = () => (
  <Dropdown
    key="more"
    overlay={
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
    }
  >
    <Button
      style={{
        border: 'none',
        padding: 0
      }}
    >
      <EllipsisOutlined
        style={{
          fontSize: 20,
          verticalAlign: 'top'
        }}
      />
    </Button>
  </Dropdown>
);
const AdvancedDetailsPageRouteView: FC<{}> = () => {
  return (
    <div>
      <PageHeaderBlock
        title="高级详情页"
        subTitle="This is a subtitle"
        tags={<Tag color="blue">Running</Tag>}
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>,
          <DropdownMenu key="more" />
        ]}
        breadcrumbRender={() => <BreadcrumbNav />}
        footer={
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Details" key="1" />
            <Tabs.TabPane tab="Rule" key="2" />
          </Tabs>
        }
      >
        <Descriptions size="small" column={2}>
          <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
          <Descriptions.Item label="Association">421421</Descriptions.Item>
          <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
          <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
          <Descriptions.Item label="Remarks">
            Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
      </PageHeaderBlock>
      <PageContentWrapper>
        <PageContentCard allPadding>AdvancedDetailsPageRouteView</PageContentCard>
      </PageContentWrapper>
    </div>
  );
};
export default AdvancedDetailsPageRouteView;
