'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
// 时间戳保证不会版本重复
const Timestamp = new Date().getTime();
// 如果你的端口设置为80，
// 使用管理员权限执行命令行。
// 例如，Mac: sudo npm运行
// 您可以通过以下方法改变端口:
// 端口= 8081 npm运行dev或npm运行dev——端口= 8081
const port = process.env.port || process.env.npm_config_port || 8081 // dev port

// 所有的配置项说明都可以在https://cli.vuejs.org/config/中找到
module.exports = {
  /**
   * 如果您计划在子路径下部署站点， 则需要设置publicPath，
   * 例如GitHub页面。 如果您计划将您的站点部署到https: //foo.github.io/bar/，
   * 然后将publicPath设置为“ / bar / ”。
   * 在大多数情况下， 请使用 '/'!!
   * 细节见: https: //cli.vuejs.org/config/ publicpath
   */
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,

  devServer: {
    port: port,
    open: true, // 是否自动启动浏览器
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // change xxx-api/login => mock/login
      // 细节见: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        // target: `https://www.fastmock.site/mock/16cc48478cd7264caa761582d3cceff4/ecologicalEnv/`,
        // target: `http://192.168.13.251:8083/`,
        target: `http://47.103.102.173:8881/ecologicalMap/`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: '/'
        }
      }
    }
  },
  configureWebpack: {
    externals: {
      'AMap': 'AMap' // 高德地图配置
    },
    // output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
    //   filename: `static/js/[name].[chunkhash].${Timestamp}.js`,
    //   chunkFilename: `static/js/[name].[chunkhash].${Timestamp}.js`
    // }
  }
}