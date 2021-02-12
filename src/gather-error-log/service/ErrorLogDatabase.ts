/*
 * @Author: WangLibin
 * @Date: 2021-02-01 09:55:10
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-07 15:42:42
 * @Description: LogService
 */
import Dexie from 'dexie';
import config from '../config';
interface AjaxLogType {
  id?: number;
  name?: string;
  age?: number;
}
interface LazyComponentLogType {
  id?: number;
  name?: any;
  age?: number;
}
class ErrorLogDatabase extends Dexie {
  public ajaxLog: Dexie.Table<AjaxLogType, number>;
  public lazyComponentLog: Dexie.Table<LazyComponentLogType, number>;

  public constructor() {
    super(config.databaseName);
    this.version(config.databaseVersion).stores({
      ajaxLog: '++id,name,age',
      lazyComponentLog: '++id,name'
    });
    this.ajaxLog = this.table('ajaxLog');
    this.lazyComponentLog = this.table('lazyComponentLog');
  }
}
export default new ErrorLogDatabase();
