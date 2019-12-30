module.exports = {
  // Project deployment base
  baseUrl: '/',

  //部署应用包时的基本 URL
  publicPath: './',

  // 打包后的输出目录
  outputDir: 'dist',

  // 保存时是不是用eslint-loader 来lint 代码
  lintOnSave: false,


  // webpack 配置~
  chainWebpack: () => {},
  configureWebpack: () => {},

  // 生产环境的sourceMap 要不要？
  productionSourceMap: true,

  // CSS related options
  css: {
    // extract CSS in components into a single CSS file (only in production)
    extract: true,

    // enable CSS source maps?
    sourceMap: false,

    // pass custom options to pre-processor loaders. e.g. to pass options to
    // sass-loader, use { sass: { ... } }
    loaderOptions: {},

    // 用不用 css Modules 啊？
    modules: false
  },

  // 使用多线程否？
  parallel: require('os').cpus().length > 1,

  // pwa 相关
  pwa: {},

  // Webpack dev server
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: null, // string | Object
    before: app => {}
  },

  // options for 3rd party plugins
  pluginOptions: {
    // ...
  }
}