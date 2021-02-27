import { FC } from 'react';
import { PageContentCard } from '@/components';
const DynamicReduxIndexRouteView: FC<{}> = () => {
  return (
    <PageContentCard allPadding style={{ minHeight: '360px' }}>
      动态 Redux
    </PageContentCard>
  );
};
export default DynamicReduxIndexRouteView;
