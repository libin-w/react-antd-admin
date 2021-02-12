import { FC, useState } from 'react';
import { Table, Button, Space } from 'antd';
import styles from './style.module.scss';
import PreviewJsonDialog from '../components/PreviewJsonDialog';
import { ColumnsType } from 'antd/lib/table/interface';
interface PreviewDataType {
  title: string;
  visible: boolean;
  content: any;
}
const AjaxError: FC<{}> = () => {
  const [previewData, setPreviewData] = useState<PreviewDataType>({
    title: '',
    visible: false,
    content: null
  });
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
      title: '接口地址',
      dataIndex: 'filePath',
      key: 'address'
    },
    {
      title: '请求类型',
      dataIndex: 'filePath',
      key: 'address'
    },
    {
      title: '请求时间',
      dataIndex: 'createTime',
      width: '200px'
    },
    {
      title: '响应时间',
      dataIndex: 'createTime',
      width: '200px'
    },

    {
      title: '操作',
      key: 'action',
      width: '240px',
      fixed: 'right',
      render: (text, record) => (
        <Space size={10}>
          <Button
            type="link"
            size="small"
            onClick={() => {
              setPreviewData({
                title: '请求参数',
                visible: true,
                content: '哈哈哈哈哈'
              });
            }}
          >
            请求参数
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              setPreviewData({
                title: '响应内容',
                visible: true,
                content: [{}]
              });
            }}
          >
            响应内容
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
    <>
      <Table
        sticky={true}
        pagination={{
          showSizeChanger: false,
          showQuickJumper: true,
          showTotal: (total) => `共 ${total} 条`
        }}
        scroll={{ x: '100%' }}
        rowKey="id"
        bordered
        title={() => (
          <div className={styles.table_header_content}>
            <span className={styles.table_title}>AJAX请求错误日志</span>
            <Space size={10}>
              <Button danger>清空全部</Button>
            </Space>
          </div>
        )}
        columns={columns}
        dataSource={data}
      />
      <PreviewJsonDialog
        title={previewData.title}
        visible={previewData.visible}
        content={previewData.content}
        onClose={() => {
          setPreviewData({
            title: '',
            visible: false,
            content: null
          });
        }}
      />
    </>
  );
};
export default AjaxError;
