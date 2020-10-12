const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./src/index.js",
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              
            },
          }
        ]
      },
      {
        test: /\.(png|jpe|svg?g|gif|ttf|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  optimization: {
  
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: 'dist/',
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map'
    
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    htmlPlugin
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};