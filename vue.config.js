/* eslint-disable */ 
const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/vue-cnode-website/'
  : '/',
  lintOnSave: false,

  /* icon组件 */
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icons') // 当前目录

    config.module
        .rule('svg-sprite')
        .test(/\.svg$/)
        .include.add(dir).end() // 只包含icons目录
        .use('svg-sprite-loader').loader('svg-sprite-loader')
        .options({extract: false}).end() //不需要解析成文件
        /* 去除svg的fill，使CSS可控制颜色 */
        .use('svgo-loader').loader('svgo-loader')
        .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir) // 其他svg loader排除icons目录


  },
  /* END */
}
