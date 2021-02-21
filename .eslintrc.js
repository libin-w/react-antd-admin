module.exports = {
  root: true,
  extends: ['react-app', 'plugin:prettier/recommended'],
  rules: {
    '@typescript-eslint/no-redeclare': 'off', // 禁用未声明的变量
    'no-undef': 'error', // 禁用未声明的变量
    'no-debugger': 'error', // 禁用 debugger
    'no-global-assign': 'error', // 禁止对全局变量赋值
    'no-eval': 'error', // 禁用 eval
    'no-param-reassign': 'error', // 禁止对函数参数再赋值
    'comma-dangle': [1, 'never'], // 对象字面量项尾不能有逗号
    'spaced-comment': [
      1,
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
      }
    ], // 要求或禁止在注释前有空白
    'prettier/prettier': [1]
  }
};
