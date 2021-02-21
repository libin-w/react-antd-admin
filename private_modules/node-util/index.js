const execa = require('execa');
const chalk = require('chalk');
const getCurrentBranch = () => {
  const currentBranch = execa.commandSync('git rev-parse --abbrev-ref HEAD').stdout;
  console.log(`current branch is ${currentBranch}`);
  return currentBranch;
};
const printErrorText = (content) => {
  console.log(chalk.red.bold(content));
};
const formatDate = (date, fmtStr) => {
  let fmt = fmtStr || 'yyyy-MM-dd hh:mm:ss';
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      );
  return fmt;
};

module.exports = {
  getCurrentBranch,
  printErrorText,
  formatDate
};
