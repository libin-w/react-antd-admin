/*
 * @Author: WangLibin
 * @Date: 2021-01-04 16:17:47
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-11 16:15:29
 * @Description: clearScript
 */
try {
  const del = require("del");
  (async () => {
    const deletedPaths = await del(["node_modules"]);
    console.log("Deleted files and directories:\n", deletedPaths.join("\n"));
  })();
} catch {}
