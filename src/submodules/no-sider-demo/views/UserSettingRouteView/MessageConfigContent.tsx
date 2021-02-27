import { FC } from 'react';
import { List, Switch } from 'antd';
const MessageConfigContent: FC<{}> = () => {
  const data = [
    {
      title: '系统消息',
      desc: '系统消息将以站内信的形式通知',
      status: true
    },
    {
      title: '系统通知',
      desc: '系统通知将以站内信的形式通知',
      status: false
    },
    {
      title: '待办任务',
      desc: '待办任务将以站内信的形式通知',
      status: true
    },
    {
      title: '邮件设置',
      desc: '重要事件发生时，将以邮件的形式通知',
      status: true
    }
  ];
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Switch
              checked={item.status}
              onChange={(e) => {
                console.log(e);
              }}
            />
          ]}
        >
          <List.Item.Meta title={item.title} description={item.desc} />
        </List.Item>
      )}
    />
  );
};
export default MessageConfigContent;
