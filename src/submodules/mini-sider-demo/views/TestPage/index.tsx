import { FC } from 'react';
import { PageContentWrapper, PageHeaderBlock } from '@/components';
import BreadcrumbNav from '../../components/AutoBreadcrumbNav';
const TestPage: FC<{}> = () => {
  return (
    <div>
      <PageHeaderBlock title="素材库" breadcrumbRender={() => <BreadcrumbNav />}></PageHeaderBlock>
    </div>
  );
};
export default TestPage;
