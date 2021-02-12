import { Suspense, FC, SuspenseProps } from 'react';
import { Spin } from 'antd';
const UnifiedSuspense: FC<Partial<SuspenseProps>> = ({ fallback, children }) => {
  return (
    <Suspense
      fallback={
        fallback || (
          <div style={{ textAlign: 'center', lineHeight: '100px' }}>
            <Spin size="large" />
          </div>
        )
      }
    >
      {children}
    </Suspense>
  );
};
export default UnifiedSuspense;
