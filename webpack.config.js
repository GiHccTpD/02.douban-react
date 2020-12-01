const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'),
  filename: 'index.html'
});

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  plugins: [htmlPlugin],
  module: {
    rules: [
      // 第三方匹配规则
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
      // { test: /\.css$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=100000'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]',
          'sass-loader'
        ]
      }
      // {
      //     test: /\.json$/,
      //     exclude: /node_modules/,
      //     use: {
      //         // included by default (https://webpack.js.org/loaders/json-loader/)
      //         loader: 'json-loader'
      //     }
      // }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.vue'],
    alias: {
      '@': path.join(__dirname, './src')
    }
  }
};
