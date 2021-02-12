import { FC } from 'react';
import { Empty, Modal } from 'antd';
import ReactJson from 'react-json-view';
interface PropsType {
  visible: boolean;
  title?: string;
  content?: any;
  onClose: () => void;
}
const PreviewJsonDialog: FC<PropsType> = ({ title = '标题', visible, content, onClose }) => {
  return (
    <Modal
      title={title}
      width="720px"
      visible={visible}
      bodyStyle={{ minHeight: '240px' }}
      footer={null}
      getContainer={false}
      onCancel={onClose}
    >
      {content ? (
        typeof content === 'object' ? (
          <ReactJson name={null} src={content} collapsed={1} collapseStringsAfterLength={100} />
        ) : (
          <code>{content}</code>
        )
      ) : (
        <Empty description={false} />
      )}
    </Modal>
  );
};
export default PreviewJsonDialog;
