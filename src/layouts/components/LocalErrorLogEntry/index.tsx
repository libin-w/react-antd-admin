/*
 * @Author: WangLibin
 * @Date: 2021-02-09 11:14:11
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-09 13:58:10
 * @Description: LocalErrorLogEntry
 */
import { FC, useState } from 'react';
import { Tooltip, Badge } from 'antd';
import { Link } from 'react-router-dom';
import { BugOutlined } from '@ant-design/icons';
const { NODE_ENV = 'production' } = process.env;
const LocalErrorLogEntry: FC<{}> = () => {
  const [count, setCount] = useState<number>(0);
  if (NODE_ENV !== 'production') {
    return (
      <Tooltip placement="bottom" title="错误日志">
        <Link className="antd-admin-header-right-action-item" to="/local-error-log">
          <Badge style={{ boxShadow: 'none' }} count={count} dot>
            <BugOutlined />
          </Badge>
        </Link>
      </Tooltip>
    );
  }
  return null;
};
export default LocalErrorLogEntry;
