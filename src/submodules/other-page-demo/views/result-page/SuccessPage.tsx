import { FC } from 'react';
import { Result, Button, Descriptions } from 'antd';
import { PageContentCard } from '@/components';
const SuccessPage: FC<{}> = () => {
  return (
    <PageContentCard allPadding style={{ minHeight: '360px' }}>
      <Result
        status="success"
        title="提交成功"
        subTitle="提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。"
        extra={[
          <Button type="primary" key="list">
            返回列表
          </Button>,
          <Button key="item">查看项目</Button>
        ]}
      >
        <Descriptions title="用户信息">
          <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="Remark">empty</Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
      </Result>
    </PageContentCard>
  );
};
export default SuccessPage;
