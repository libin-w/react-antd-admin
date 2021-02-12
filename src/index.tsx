/*
 * @Author: WangLibin
 * @Date: 2021-02-01 15:10:25
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-09 14:06:48
 * @Description: index
 */
import ReactDOM from 'react-dom';
import '@/assets/styles/index.scss';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('antd-admin-root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(window.__console__.log);
