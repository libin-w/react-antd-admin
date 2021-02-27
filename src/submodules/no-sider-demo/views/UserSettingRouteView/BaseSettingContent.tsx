import { FC } from 'react';
import { Form, Input, Button, Select } from 'antd';
import styles from './style.module.scss';
const BaseSettingContent: FC<{}> = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div className={styles.base_setting_content}>
      <div className={styles.base_setting_content_left}>
        <Form form={form} name="base-setting-form" layout="vertical" onFinish={onFinish}>
          <Form.Item name="note" label="昵称" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="note" label="邮箱" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="note" label="国家/地区" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="note" label="所在省市" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="note" label="街道地址" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="note" label="联系电话" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="note" label="个人简介" rules={[{ required: true }]}>
            <Input.TextArea showCount maxLength={100} autoSize={{ minRows: 3, maxRows: 6 }} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              更新基本信息
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className={styles.base_setting_content_right}>22</div>
    </div>
  );
};
export default BaseSettingContent;
