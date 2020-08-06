const path = require('path')

module.exports = (options, context) => ({
  enhanceAppFiles: [
    path.resolve(__dirname, './lib/client.js')
  ],
  // scss: {
  //   includePath: ["./lib/theme/tabs.scss"]
  // },
  less: {
    path:["./lib/theme/tabs.less"]
  },
  chainMarkdown (config) {
    config
      .plugin('@superbiger/tabs')
      .use(require('./lib/markdownItPlugin'), [options])
      .end()
  }
})