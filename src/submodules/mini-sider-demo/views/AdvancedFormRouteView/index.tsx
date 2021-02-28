import { FC, useState } from 'react';
import { PageContentWrapper, PageContentCard, PageHeaderBlock } from '@/components';
import BreadcrumbNav from '../../components/AutoBreadcrumbNav';
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const AdvancedFormRouteView: FC<{}> = () => {
  const [form] = Form.useForm();

  return (
    <div>
      <PageHeaderBlock title="高级表单" breadcrumbRender={() => <BreadcrumbNav />}>
        当一次性提交大量数据时，可使用高级表单。
      </PageHeaderBlock>
      <PageContentWrapper>
        <PageContentCard allPadding>AdvancedFormRouteView</PageContentCard>
      </PageContentWrapper>
    </div>
  );
};
export default AdvancedFormRouteView;
