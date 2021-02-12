const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const CracoLessPlugin = require('craco-less');
const CracoSassResourcesLoader = require('craco-sass-resources-loader');
const WebpackBar = require('webpackbar');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { formatDate } = require('../private_modules/node-util/index');
const productionGzipExtensions = ['js', 'css'];
const resolve = (p) => path.resolve(__dirname, '../', p);
const urlReg = /^(http|https):\/\//;

const printError = (content) => {
  console.log(chalk.red.bold(content));
};

const createLogger = () => {
  // 检查logs文件夹是否存在
  if (fs.existsSync(resolve('logs/'))) {
    fs.writeFileSync(resolve('logs/proxy.log'), '', {});
  } else {
    fs.mkdirSync(resolve('logs/'));
  }
  const stderr = fs.createWriteStream(resolve('logs/proxy.log'), {
    flags: 'a',
    encoding: 'utf8'
  });
  return new console.Console(stderr);
};
const { REACT_APP_AXIOS_BASE_URL } = process.env;
module.exports = ({ env }) => {
  /**
   * antd 按需加载
   */
  const babelPlugins = [['import', { libraryName: 'antd', style: true }]];
  /**
   * webpack 构建时，终端输出进度条
   */
  const webpackPlugins = [new WebpackBar(), new AntdDayjsWebpackPlugin()];
  switch (env) {
    case 'production':
      /**
       * production 模式不生成 source map
       */
      process.env.GENERATE_SOURCEMAP = 'false';
      /**
       * production 模式移除 console.log()
       */
      babelPlugins.push(['transform-remove-console', { exclude: ['error', 'warn'] }]);
      webpackPlugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        }),
        new BundleAnalyzerPlugin({
          analyzerMode: 'disabled', // 不启动展示打包报告的http服务器
          generateStatsFile: true // 是否生成stats.json文件
        })
      );
      break;

    default:
      process.env.GENERATE_SOURCEMAP = 'true';
      break;
  }
  return {
    eslint: {
      enable: true,
      mode: 'extends',
      configure: (eslintConfig) => {
        return eslintConfig;
      },
      loaderOptions: (eslintOptions) => {
        return eslintOptions;
      }
    },
    babel: {
      plugins: babelPlugins
    },
    devServer: (devServerConfig) => {
      const logger = createLogger();
      devServerConfig.proxy = {
        '/api': {
          target: REACT_APP_AXIOS_BASE_URL,
          changeOrigin: true,
          onProxyRes: (proxyRes, req, res) => {
            let body = [];
            proxyRes.on('data', function (chunk) {
              body.push(chunk);
            });
            proxyRes.on('end', function () {
              body = Buffer.concat(body).toString();
              let resContent = '';
              try {
                resContent = JSON.stringify(JSON.parse(body));
              } catch (error) {
                resContent = null;
              }
              logger.log(
                `${formatDate(new Date(proxyRes.headers.date), 'yyyy-MM-dd hh:mm:ss.S')} INFO [${
                  req.method
                } ${res.statusCode} ${req.originalUrl}] ${resContent}`
              );
            });
          },
          onError: (err, req, res) => {
            logger.log(
              `${formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss.S')} ERROR [${req.method} ${
                req.originalUrl
              }] Error occurred while trying to proxy request ${req.originalUrl} from ${
                req.headers.host
              } to ${REACT_APP_AXIOS_BASE_URL}`
            );
          }
        }
      };
      return devServerConfig;
    },
    jest: {
      babel: {
        addPresets: true /* (default value) */,
        addPlugins: true /* (default value) */
      },
      configure: (jestConfig) => {
        return jestConfig;
      }
    },
    webpack: {
      plugins: webpackPlugins,
      alias: {
        '@': resolve('src')
      },
      configure: (webpackConfig) => {
        const {
          REACT_APP_AXIOS_BASE_URL,
          REACT_APP_RUNTIME_ENV,
          REACT_APP_BRANCH_NAME,
          REACT_APP_DEPLOY_PATH
        } = process.env;
        if (urlReg.test(REACT_APP_AXIOS_BASE_URL) === false) {
          printError('【REACT_APP_AXIOS_BASE_URL】不合法，请检查！！！');
          process.exit('1');
        }

        // 打包构建时，自定义 webpack 配置
        if (env === 'production') {
          webpackConfig.output.publicPath = REACT_APP_DEPLOY_PATH;
          // 删除默认的 WorkboxWebpackPlugin 配置
          const workboxPluginIndex = webpackConfig.plugins.findIndex((element) => {
            return Object.getPrototypeOf(element).constructor.name === 'GenerateSW';
          });
          if (workboxPluginIndex !== -1) {
            webpackConfig.plugins.splice(workboxPluginIndex, 1);
          }
          const manifestPluginIndex = webpackConfig.plugins.findIndex((element) => {
            return Object.getPrototypeOf(element).constructor.name === 'ManifestPlugin';
          });
          // 向 asset-manifest.json 中添加自定义字段
          webpackConfig.plugins[manifestPluginIndex].opts.generate = (seed, files, entrypoints) => {
            const manifestFiles = files.reduce((manifest, file) => {
              manifest[file.name] = file.path;
              return manifest;
            }, seed);
            const entrypointFiles = entrypoints.main.filter(
              (fileName) => !fileName.endsWith('.map')
            );
            return {
              files: manifestFiles,
              entrypoints: entrypointFiles,
              REACT_APP_AXIOS_BASE_URL,
              REACT_APP_RUNTIME_ENV,
              REACT_APP_BRANCH_NAME: REACT_APP_BRANCH_NAME
            };
          };
        }

        return webpackConfig;
      }
    },
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              javascriptEnabled: true,
              modifyVars: {
                '@menu-collapsed-width': '48px',
                '@zindex-message': '3000',
                '@primary-color': '#1890ff',
                '@body-background': '#f7f8fa',
                '@layout-body-background': '#f7f8fa'
              }
            }
          }
        }
      },
      {
        plugin: CracoSassResourcesLoader,
        options: {
          resources: [
            resolve('src/assets/styles/scss-variable.module.scss'),
            resolve('src/assets/styles/preset-classname.scss')
          ]
        }
      }
    ]
  };
};
