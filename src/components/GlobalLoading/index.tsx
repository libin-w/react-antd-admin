/*
 * @Author: WangLibin
 * @Date: 2020-07-21 14:09:11
 * @LastEditors: WangLibin
 * @LastEditTime: 2020-07-21 14:32:31
 * @Description: GlobalLoading
 */

import React from 'react';
import { Spin } from 'antd';
import GlobalLoadingServer from './server';
import style from './style.module.css';
type SizeTypes = 'small' | 'default' | 'large';
export interface GlobalLoadingProps {
  size?: SizeTypes;
  tip?: string;
  delay?: number;
  indicator?: React.ReactElement<HTMLElement>;
  bgColor?: string;
}
const GlobalLoading = (props: GlobalLoadingProps) => (
  <div
    className={style.global_loading_wrapper}
    style={{
      backgroundColor: props.bgColor || 'unset'
    }}
  >
    <Spin {...props} />
  </div>
);
GlobalLoading.server = GlobalLoadingServer;
export default GlobalLoading;
