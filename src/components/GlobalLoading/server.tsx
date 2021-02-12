/*
 * @Author: WangLibin
 * @Date: 2020-07-21 10:37:46
 * @LastEditors: WangLibin
 * @LastEditTime: 2020-12-09 16:29:40
 * @Description: GlobalLoading
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Spin } from 'antd';

class GlobalLoadingServer {
  domNode: HTMLElement;
  isExistNode: boolean;
  timer: any;
  spinOptions: any;
  constructor() {
    this.domNode = document.createElement('div');
    this.isExistNode = false;
    this.timer = null;
    this.spinOptions = {};
  }
  private runder(visible: boolean, bgColor?: string) {
    if (this.isExistNode === false && visible) {
      this.domNode.setAttribute(
        'style',
        'position: fixed;z-index: 1005; width: 100%; height: 100%; top: 0; left: 0; display: none; justify-content: center; align-items: center;'
      );
      document.body.appendChild(this.domNode);
      const chilrden = this.createNode();
      ReactDOM.render(chilrden, this.domNode);
      this.isExistNode = true;
    }
    if (visible) {
      this.domNode.style.backgroundColor = bgColor || 'unset';
      this.domNode.style.display = 'flex';
    } else {
      this.domNode.style.display = 'none';
    }
  }
  private createNode() {
    return <Spin {...this.spinOptions} />;
  }
  show(
    opts: {
      tip?: string;
      size?: string;
      delay?: number;
      indicator?: React.ReactElement<HTMLElement>;
      bgColor?: string;
      onFinish?: () => void;
    } = {}
  ) {
    const { tip, size, delay, indicator, bgColor, onFinish } = opts;
    this.spinOptions = {
      tip: tip || undefined,
      size: size || undefined,
      indicator: indicator || undefined
    };
    this.timer && clearTimeout(this.timer);
    if (delay && ~~delay > 0) {
      this.timer = setTimeout(() => {
        this.runder(true, bgColor);
        setTimeout(() => {
          typeof onFinish === 'function' && onFinish();
        }, 0);
      }, ~~delay);
    } else {
      this.runder(true, bgColor);
      setTimeout(() => {
        typeof onFinish === 'function' && onFinish();
      }, 0);
    }
  }
  hide(
    opts: {
      onFinish?: () => void;
    } = {}
  ) {
    const { onFinish } = opts;
    this.timer && clearTimeout(this.timer);
    this.runder(false);
    setTimeout(() => {
      typeof onFinish === 'function' && onFinish();
    }, 0);
  }
}

export default new GlobalLoadingServer();
