/*
 * @Author: WangLibin
 * @Date: 2021-01-28 10:29:07
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-01-28 10:55:28
 * @Description: PageHeaderBlock
 */

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
