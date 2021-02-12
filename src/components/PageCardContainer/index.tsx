import React, { FC } from 'react';
import { Spin } from 'antd';
import style from './style.module.scss';
const PageCardContainer: FC<{
  customStyle?: React.CSSProperties;
  className?: string;
  loading?: boolean;
}> = ({ children, customStyle, className, loading }) => (
  <div className={[style.page_card_container, className].join(' ')} style={customStyle}>
    {children}
    {loading === true ? (
      <div className={style.loading_box}>
        <Spin />
      </div>
    ) : null}
  </div>
);

export default PageCardContainer;
