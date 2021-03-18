import { FC, useState } from 'react';
import { PageContentWrapper, PageContentCard, PageHeaderBlock } from '@/components';
import BreadcrumbNav from '../../components/AutoBreadcrumbNav';
import { Form } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const BasicDetailsPageRouteView: FC<{}> = () => {
  return (
    <div>
      <PageHeaderBlock
        title="基础详情页"
        breadcrumbRender={() => <BreadcrumbNav />}
      ></PageHeaderBlock>
      <PageContentWrapper>
        <PageContentCard allPadding>BasicDetailsPageRouteView</PageContentCard>
      </PageContentWrapper>
    </div>
  );
};
export default BasicDetailsPageRouteView;
