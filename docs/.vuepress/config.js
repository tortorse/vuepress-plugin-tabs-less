const path = require('path')

console.log(path.resolve(__dirname, '../../index.js'))

module.exports = {
  base: "/vuepress-plugin-tabs-less/",
  title: "vuepress-plugin-element-tabs-less",
  description: "markdown custom container to display content in tabs",
  themeConfig: {
    repo: "https://github.com/tortorse/vuepress-plugin-tabs-less",
    editLinks: true,
    docsDir: "docs",
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",
  },
  plugins: [path.resolve(__dirname, "../../index.js")],
};