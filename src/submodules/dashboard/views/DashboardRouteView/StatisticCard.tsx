import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Statistic, Tooltip } from 'antd';
interface StylePropsType {}
const Style = styled.div<StylePropsType>`
  .header {
    display: flex;
    align-items: flex-start;
    color: rgba(0, 0, 0, 0.45);
    .left {
      width: 0px;
      flex: 1;
    }
    .right {
      margin-left: 10px;
      cursor: pointer;
    }
  }
  .content {
    width: 100%;
    margin-bottom: 12px;
    position: relative;
  }
  .footer {
    margin-top: 8px;
    padding-top: 9px;
    border-top: 1px solid #f0f0f0;
  }
`;
interface PropsType {
  desc?: string;
  footer?: ReactNode;
}
const StatisticCard: FC<PropsType> = ({ children, desc, footer }) => {
  return (
    <Style>
      <div className="header">
        <div className="left">
          <Statistic title="Active Users" value={112893} />
        </div>
        <div className="right">
          {desc && (
            <Tooltip title={desc}>
              <InfoCircleOutlined />
            </Tooltip>
          )}
        </div>
      </div>
      {children && <div className="content">{children}</div>}
      {footer && <div className="footer">{footer}</div>}
    </Style>
  );
};
export default StatisticCard;
