import { FC } from 'react';
import { Table, Button, Space } from 'antd';
import styles from './style.module.scss';
import { ColumnsType } from 'antd/lib/table/interface';
const ComponentRuntimeError: FC<{}> = () => {
  const columns: ColumnsType<{}> = [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
      width: '80px'
    },

    {
      title: '页面地址',
      dataIndex: 'pageUrl'
    },
    {
      title: '文件路径',
      dataIndex: 'filePath',
      key: 'address'
    },
    {
      title: '时间',
      dataIndex: 'createTime',
      width: '200px'
    },

    {
      title: '操作',
      key: 'action',
      fixed: 'right',
      width: '172px',
      render: (text, record) => (
        <Space size={10}>
          <Button type="link" size="small">
            错误详情
          </Button>
          <Button type="link" size="small" danger>
            删除
          </Button>
        </Space>
      )
    }
  ];

  const data = [
    {
      id: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    },
    {
      id: '2',
      name: 'Jim Green',
      age: 42,
      createTime: '2021.02.12 22:22:44',
      tags: ['loser']
    },
    {
      id: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }
  ];
  for (let i = 0; i < 54; i++) {
    data.push({
      id: `key--${i}`,
      name: 'John Brown',
      age: 32 + i,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    });
  }
  return (
    <Table
      sticky={true}
      pagination={{
        showSizeChanger: false,
        showQuickJumper: true,
        showTotal: (total) => `共 ${total} 条`
      }}
      rowKey="id"
      scroll={{ x: '100%' }}
      bordered
      title={() => (
        <div className={styles.table_header_content}>
          <span className={styles.table_title}>组件运行时错误</span>
          <Space size={10}>
            <Button danger>清空全部</Button>
          </Space>
        </div>
      )}
      columns={columns}
      dataSource={data}
    />
  );
};
export default ComponentRuntimeError;
