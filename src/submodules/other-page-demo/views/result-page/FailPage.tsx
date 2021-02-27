import { FC } from 'react';
import { Result, Button, Typography } from 'antd';
import { PageContentCard } from '@/components';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
const { Paragraph, Text } = Typography;
const FailPage: FC<{}> = () => {
  return (
    <PageContentCard allPadding style={{ minHeight: '360px' }}>
      <Result
        status="error"
        title="提交失败"
        subTitle="请核对并修改以下信息后，再重新提交。"
        extra={[
          <Button type="primary" key="console">
            返回修改
          </Button>
        ]}
      >
        <Paragraph>
          <Text
            strong
            style={{
              fontSize: 16
            }}
          >
            您提交的内容有如下错误：
          </Text>
        </Paragraph>
        <Paragraph>
          <CloseCircleOutlined className="site-result-demo-error-icon" /> 您的账户已被冻结
          <Button type="link">
            立即解冻
            <RightOutlined />
          </Button>
        </Paragraph>
        <Paragraph>
          <CloseCircleOutlined className="site-result-demo-error-icon" /> 您的账户还不具备申请资格
          <Button type="link">
            立即升级
            <RightOutlined />
          </Button>
        </Paragraph>
      </Result>
    </PageContentCard>
  );
};
export default FailPage;
