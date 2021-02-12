/*
 * @Author: WangLibin
 * @Date: 2021-01-12 15:07:14
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-07 10:55:49
 * @Description:
 */
import { add, deleteData } from '@/gather-error-log/service';
const DemoRouteView = () => {
  add();
  deleteData();
  return (
    <div
    //   onClick={() => {
    //     LogService.add({ id: 2, name: '张三', age: 24, email: 'zhangsan@example.com' });
    //   }}
    >
      DemoRouteView
    </div>
  );
};

export default DemoRouteView;
