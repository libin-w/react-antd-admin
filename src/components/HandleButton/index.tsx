/*
 * @Author: WangLibin
 * @Date: 2020-08-24 14:56:50
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-04 17:46:37
 * @Description: ButtonOnTableCell
 */
import React, { FC, ReactNode } from 'react';
import { Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import style from './style.module.scss';

interface PropsTypes {
  onClick?: (event?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  hidden?: boolean;
  disabled?: boolean;
  danger?: boolean;
  hasConfirm?: boolean;
  confirmModalConfig?: {
    title?: string | ReactNode;
    content?: string | ReactNode;
  };
}

const { confirm } = Modal;
const HandleButton: FC<PropsTypes> = ({
  children,
  hasConfirm,
  disabled,
  danger,
  hidden,
  confirmModalConfig,
  onClick
}) => {
  if (hidden) {
    return null;
  }
  const handleClickBtn = () => {
    if (hasConfirm === true) {
      confirm({
        title: confirmModalConfig?.title || '提示信息',
        icon: <ExclamationCircleOutlined />,
        content: confirmModalConfig?.content,
        centered: true,
        okText: '确定',
        cancelText: '取消',
        getContainer: '.antd-admin-main-content',
        onOk() {
          typeof onClick === 'function' && onClick();
        }
      });
    } else {
      typeof onClick === 'function' && onClick();
    }
  };
  return (
    <Button
      type="link"
      className={style.handle_button}
      disabled={disabled}
      size="small"
      onClick={handleClickBtn}
      danger={danger}
    >
      {children}
    </Button>
  );
};

export default HandleButton;
