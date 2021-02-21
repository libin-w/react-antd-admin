import { FC, useState } from 'react';
import ResizeObserver from 'rc-resize-observer';
import variablesScss from '@/assets/styles/scss-variable.module.scss';
import styled from 'styled-components';
interface StylePropsType {
  cssValue: {
    width: string;
    justifyContent: string;
  };
}
const Style = styled.div<StylePropsType>`
  margin: 0px -${variablesScss.basicsContentMargin};
  .fixed-footer-wrapper {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: ${({ cssValue }) => cssValue.justifyContent};
    padding: 0px ${variablesScss.basicsContentMargin};
    height: 48px;
    position: fixed;
    width: ${({ cssValue }) => cssValue.width};
    bottom: 0px;
    z-index: 99;
    background: #fff;
    border-top: 1px solid #f0f0f0;
    box-shadow: 0 -6px 16px -8px rgb(0 0 0 / 8%), 0 -9px 28px 0 rgb(0 0 0 / 5%),
      0 -12px 48px 16px rgb(0 0 0 / 3%);
  }
`;
interface PropsType {
  align?: 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between';
  visible?: boolean;
}
const FixedFooterWrapper: FC<PropsType> = ({ align = 'flex-end', visible = true, children }) => {
  const [contentWidth, setContentWidth] = useState<string>('100%');
  if (visible !== true) {
    return null;
  }
  return (
    <ResizeObserver
      onResize={({ width }) => {
        setContentWidth(width ? width + 'px' : '100%');
      }}
    >
      <Style
        cssValue={{
          width: contentWidth,
          justifyContent: align
        }}
      >
        <div className="fixed-footer-wrapper">{children}</div>
      </Style>
    </ResizeObserver>
  );
};
export default FixedFooterWrapper;
