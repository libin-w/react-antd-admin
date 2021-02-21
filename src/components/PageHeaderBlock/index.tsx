import { FC } from 'react';
import { PageHeader, PageHeaderProps } from 'antd';
import styles from './style.module.scss';

interface PropsType extends PageHeaderProps {}
const PageHeaderBlock: FC<PropsType> = ({ children, ...args }) => {
  return (
    <PageHeader ghost={false} className={styles.page_header_block} {...args}>
      {children}
    </PageHeader>
  );
};
export default PageHeaderBlock;
