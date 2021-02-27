import { FC } from 'react';
import { Button, List } from 'antd';
const SafetyConfigContent: FC<{}> = () => {
  const data = [
    {
      title: '账户密码',
      desc: '当前密码强度：：强',
      btnText: '修改'
    },
    {
      title: '绑定手机',
      desc: '已绑定手机号：+86156****0000',
      btnText: '修改'
    },
    {
      title: '密保问题',
      desc: '未设置密保问题，密保问题可有效保护账户安全',
      btnText: '设置'
    },
    {
      title: '备用邮箱',
      desc: '已绑定邮箱：：ant***sign.com',
      btnText: '修改'
    }
  ];
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item actions={[<Button type="link">{item.btnText}</Button>]}>
          <List.Item.Meta title={item.title} description={item.desc} />
        </List.Item>
      )}
    />
  );
};
export default SafetyConfigContent;
