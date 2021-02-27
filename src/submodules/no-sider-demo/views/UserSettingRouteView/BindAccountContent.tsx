import { FC } from 'react';
import { List, Avatar, Button, Popconfirm, message } from 'antd';
import weixinIcon from './images/weixin_icon.svg';
import weiboIcon from './images/weibo_icon.svg';
import twitterIcon from './images/twitter_icon.svg';
import githubIcon from './images/github_icon.svg';
import facebookIcon from './images/facebook_icon.svg';
const BindAccountContent: FC<{}> = () => {
  const data = [
    {
      title: '微信',
      bindValue: '',
      defaultDesc: '当前未绑定微信账号',
      icon: weixinIcon
    },
    {
      title: '微博',
      bindValue: '额。。。。。',
      defaultDesc: '当前未绑定微博账号',
      icon: weiboIcon
    },
    {
      title: 'Github',
      bindValue: '',
      defaultDesc: '当前未绑定 Github 账号',
      icon: githubIcon
    },
    {
      title: 'Facebook',
      bindValue: '',
      defaultDesc: '当前未绑定 Facebook 账号',
      icon: facebookIcon
    },
    {
      title: 'Twitter',
      bindValue: '',
      defaultDesc: '当前未绑定 Twitter 账号',
      icon: twitterIcon
    }
  ];
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Popconfirm
              disabled={!item.bindValue}
              title="确定解绑该账号吗？"
              arrowPointAtCenter={true}
              placement="left"
              onConfirm={(e) => {
                console.log(e);
                message.success('Click on 确定');
              }}
              onCancel={(e) => {
                console.log(e);
                message.error('Click on 取消');
              }}
              okText="确定"
              cancelText="取消"
            >
              <Button
                type="link"
                danger={!!item.bindValue}
                onClick={
                  item.bindValue
                    ? undefined
                    : () => {
                        message.error('Click on 绑定');
                      }
                }
              >
                {item.bindValue ? '解绑' : '绑定'}
              </Button>
            </Popconfirm>
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.icon} />}
            title={item.title}
            description={item.bindValue ? `已绑定: ${item.bindValue}` : item.defaultDesc}
          />
        </List.Item>
      )}
    />
  );
};
export default BindAccountContent;
