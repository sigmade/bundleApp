const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 
const conf = {
   entry: './src/index.js',
   output: {
       path: path.resolve(__dirname, 'dist'),
       filename : 'main.js'
   },
   module: {
    rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },
        {
            test: /\.scss$/i,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader',
            ],
        }
    ]
   },
   plugins: [
    new MiniCssExtractPlugin({
        filename: 'styles.css',
      }),
  ],
}
 
module.exports = conf;