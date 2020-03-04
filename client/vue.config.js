module.exports = {
  pluginOptions: {
    quasar: {
      treeShake: true
    }
  },
  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar[\\\/]/
  ],
  outputDir : __dirname + '/../server/public',
  devServer : {
    proxy: 'http://localhost:3000'
  }
}
