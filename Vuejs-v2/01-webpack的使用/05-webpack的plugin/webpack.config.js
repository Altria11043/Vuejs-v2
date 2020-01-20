const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

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
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 20000,
              name: 'img/[name][hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    // 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    // new webpack.BannerPlugin('该版本为学习用, 仅供参考'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new UglifyjsWebpackPlugin()
  ],
  devServer: {
    contentBase: './dist',
    inline: true
  }
}