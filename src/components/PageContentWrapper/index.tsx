import { FC } from 'react';
import { UnifiedSuspense } from '@/components';
import classNames from 'classnames';
import styles from './style.module.scss';

interface PropsType {
  allPadding?: boolean;
}
const PageContentWrapper: FC<PropsType> = ({ allPadding = false, children }) => {
  return (
    <UnifiedSuspense>
      <section
        className={classNames(styles.page_content_wrapper, {
          'all-padding': allPadding === true
        })}
      >
        {children}
      </section>
    </UnifiedSuspense>
  );
};
export default PageContentWrapper;
