const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    // overlay: {
    //   errors: true
    // }
  },
  css: {
    extract: false//Default: 生产环境下是 true，开发环境下是 false,是否将组件中的 CSS 提取至一个独立的 CSS 文件中 
  }
})
