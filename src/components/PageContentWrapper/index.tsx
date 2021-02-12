import { FC } from 'react';
import { UnifiedSuspense } from '@/components';
import styles from './style.module.scss';

interface PropsType {}
const PageContentWrapper: FC<PropsType> = ({ children }) => {
  return (
    <UnifiedSuspense>
      <section className={styles.page_content_wrapper}>{children}</section>
    </UnifiedSuspense>
  );
};
export default PageContentWrapper;
