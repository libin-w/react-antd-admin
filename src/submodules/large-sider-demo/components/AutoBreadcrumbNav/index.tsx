import { FC } from 'react';

import SubmoduleBreadcrumbNav from '@/layouts/SubmoduleLayout/SubmoduleBreadcrumbNav';
import moduleConfig from '../../moduleConfig';
import routerConfig from '../../routerConfig';
interface PropsType {}

const AutoBreadcrumbNav: FC<PropsType> = () => {
  return <SubmoduleBreadcrumbNav moduleConfig={moduleConfig} routerConfig={routerConfig} />;
};
export default AutoBreadcrumbNav;
