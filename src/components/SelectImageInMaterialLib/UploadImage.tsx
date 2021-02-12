/*
 * @Author: WangLibin
 * @Date: 2021-02-04 20:35:24
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-05 16:51:35
 * @Description: UploadImage
 */
import { FC, useState } from 'react';
import { Modal, Form, Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from './style.module.scss';
interface UploadImageProps {
  visible: boolean;
  groupId: number;
  onClose?: (refresh?: boolean) => void;
}
export type UploadImageType = FC<UploadImageProps>;
const UploadImage: UploadImageType = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const closeDialog = (refresh: boolean) => {
    onClose?.(refresh);
    form.resetFields();
  };
  const beforeUpload = (file) => {
    console.log(file);

    const validFileType =
      file.type === 'image/jpeg' ||
      file.type === 'image/png' ||
      file.type === 'image/jpg' ||
      file.type === 'image/gif';
    if (!validFileType) {
      message.error('只能上传 JPG/PNG/GIF 类型的图片!');
    }
    const validFileSize = file.size / 1024 / 1024 < 2;
    if (!validFileSize) {
      message.error('图片大小不能超过 2MB!');
    }
    return validFileType && validFileSize;
  };
  return (
    <Modal
      title="添加素材"
      width="620px"
      visible={visible}
      confirmLoading={submitLoading}
      getContainer=".basics-submodule-layout-wrapper"
      onCancel={() => closeDialog(false)}
      onOk={() => {
        setSubmitLoading(true);
        form
          .validateFields()
          .then((values) => {
            console.log(values);
          })
          .catch((error) => {
            console.log(error);
            setSubmitLoading(false);
          });
      }}
    >
      <Form
        name="upload-image-form"
        form={form}
        initialValues={{
          imageList: [
            {
              uid: '-4',
              name: 'image.png',
              status: 'done',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
              uid: '-xxx',
              percent: 50,
              name: 'image.png',
              status: 'uploading',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
              uid: '-5',
              name: 'image.png',
              status: 'error'
            }
          ]
        }}
      >
        <Form.Item
          className="margin-b-0"
          dependencies={['imageList']}
          extra="仅支持 PNG JPG JPEG GIF 格式的文件，并且不能超过 2M"
        >
          {({ getFieldValue }) => {
            const fileList = getFieldValue('imageList');
            return (
              <Form.Item
                noStyle
                name="imageList"
                valuePropName="fileList"
                getValueFromEvent={(e: any) => {
                  if (Array.isArray(e)) {
                    return e;
                  }
                  return e && e.fileList;
                }}
                rules={[{ required: true, type: 'array', message: '请上传图片！' }]}
              >
                <Upload
                  className={styles.image_uploader}
                  accept="image/png, image/jpeg, image/jpg, image/gif"
                  listType="picture-card"
                  beforeUpload={beforeUpload}
                  customRequest={(options) => {
                    console.log(options);
                  }}
                  disabled={submitLoading}
                >
                  {fileList.length >= 10 ? null : (
                    <div>
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  )}
                </Upload>
              </Form.Item>
            );
          }}
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default UploadImage;
