const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    // __dirname可以获取到当前路径, 然后拼接dist
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责将css文件进行加载, 不负责解析
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时, 是从右向左读
        use: [ 'style-loader','css-loader' ]
      }
    ]
  }
}