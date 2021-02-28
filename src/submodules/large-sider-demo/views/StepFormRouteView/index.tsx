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

const StepFormRouteView: FC<{}> = () => {
  const [form] = Form.useForm();

  return (
    <div>
      <PageHeaderBlock title="分步表单" breadcrumbRender={() => <BreadcrumbNav />}>
        将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。
      </PageHeaderBlock>
      <PageContentWrapper>
        <PageContentCard allPadding>StepFormRouteView</PageContentCard>
      </PageContentWrapper>
    </div>
  );
};
export default StepFormRouteView;
