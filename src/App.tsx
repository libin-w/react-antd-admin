/*
 * @Author: WangLibin
 * @Date: 2021-01-21 19:18:01
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-08 10:49:08
 * @Description:
 */
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/es/locale/zh_CN';
import store from '@/store/index';
import AppRoute from '@/routers/index';
import { getBaseName } from '@/utils/index';

const App = () => {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <BrowserRouter basename={getBaseName()}>
          <AppRoute />
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  );
};

export default App;
