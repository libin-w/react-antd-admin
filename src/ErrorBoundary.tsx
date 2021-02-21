import React from 'react';
import { Result, Button } from 'antd';
import { FrownOutlined } from '@ant-design/icons';
import { getBaseName } from '@/utils/index';
interface PropsType {}
interface StateType {
  hasError: boolean;
}
class ErrorBoundary extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    window.__console__.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return (
        <div
          style={{
            height: '100vh',
            minHeight: '400px',
            backgroundColor: '#ffffff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Result
            icon={<FrownOutlined style={{ color: '#ff4d4f' }} />}
            title="系统内部错误，请稍后重试！"
            extra={
              <Button
                type="primary"
                onClick={() => {
                  window.location.href = getBaseName();
                }}
              >
                回到首页
              </Button>
            }
          />
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
