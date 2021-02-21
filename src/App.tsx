import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/es/locale/zh_CN';
import store from '@/store/index';
import AppRoute from '@/routers/index';

const App = () => {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <AppRoute />
      </ConfigProvider>
    </Provider>
  );
};

export default App;
