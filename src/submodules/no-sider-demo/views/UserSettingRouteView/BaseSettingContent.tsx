import { FC, useState } from 'react';
import { Form, Input, Button, Image, Upload, message } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import styles from './style.module.scss';
import 'antd/es/modal/style';
import 'antd/es/slider/style';
const UserAvatar: FC<{
  defaultUrl: string;
}> = ({ defaultUrl }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [avatarUrl, setAvatarUrl] = useState<string>('');

  const uploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text'
    },
    showUploadList: false,
    onChange(info) {
      if (info.file.status === 'uploading') {
        setLoading(true);
      } else {
        setLoading(false);
      }
      if (info.file.status === 'done') {
        console.log(info.file.response.url);
        message.success(`${info.file.name} file uploaded successfully`);
        setAvatarUrl(info.file.response.url);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };
  console.log(avatarUrl);
  return (
    <div className={styles.base_setting_content_right}>
      <div className={styles.title}>头像</div>
      <Image
        preview={{
          getContainer: false
        }}
        width={120}
        height={120}
        src={avatarUrl || defaultUrl}
      />
      <ImgCrop modalTitle="编辑图片" rotate={true} modalOk="确定" modalCancel="取消">
        <Upload {...uploadProps}>
          <Button
            loading={loading}
            className={styles.upload_btn}
            block
            icon={<CloudUploadOutlined />}
          >
            修改头像
          </Button>
        </Upload>
      </ImgCrop>
    </div>
  );
};
const BaseSettingContent: FC<{}> = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div className={styles.base_setting_content}>
      <div className={styles.base_setting_content_left}>
        <Form form={form} name="base-setting-form" layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="nickname"
            label="昵称"
            rules={[{ required: true, whitespace: false, message: '请填写您的昵称！' }]}
          >
            <Input maxLength={20} />
          </Form.Item>
          <Form.Item name="email" label="邮箱" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="country" label="国家/地区" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="city" label="所在省市" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="address" label="街道地址" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="tel" label="联系电话" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="desc" label="个人简介" rules={[{ required: true }]}>
            <Input.TextArea showCount maxLength={100} autoSize={{ minRows: 3, maxRows: 6 }} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              更新基本信息
            </Button>
          </Form.Item>
        </Form>
      </div>
      <UserAvatar defaultUrl="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
    </div>
  );
};
export default BaseSettingContent;
