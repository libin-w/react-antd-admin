import { FC } from 'react';
import { Calendar, Badge } from 'antd';
import { PageContentCard } from '@/components';
import styled from 'styled-components';
interface StylePropsType {}
const Style = styled.div<StylePropsType>`
  .events {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .events .ant-badge-status {
    width: 100%;
    overflow: hidden;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .notes-month {
    font-size: 28px;
    text-align: center;
  }
  .notes-month section {
    font-size: 28px;
  }
`;
const FailPage: FC<{}> = () => {
  function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' }
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' }
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' }
        ];
        break;
      default:
    }
    return listData || [];
  }
  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }
  return (
    <PageContentCard allPadding style={{ minHeight: '360px' }}>
      <Style>
        <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
      </Style>
    </PageContentCard>
  );
};
export default FailPage;
