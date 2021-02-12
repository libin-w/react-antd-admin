/*
 * @Author: WangLibin
 * @Date: 2021-02-12 13:22:04
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-12 13:22:31
 * @Description:
 */
import Mock from "mockjs";
Mock.mock("http://localhost:8800/api/user", {
  name: "@name",
  "age|1-100": 100,
  color: "@color",
});
