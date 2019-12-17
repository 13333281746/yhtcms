const path = require('path');

module.exports = {
  entry: {
    bundle: './src/index.js'
   },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
   },
  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
        },
       {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'less-loader', // compiles Less to CSS
         options: {
           modifyVars: {
             'primary-color': '#2fb4e9',
             'link-color': '#2fb4e9',
             'border-radius-base': '2px',
             'text-color':'#2fb4e9',
           },
           javascriptEnabled: true,
         },
        }],
      },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
              },
            },
          ],
       },
       {
         test: /\.js|\.jsx$/,
         use: 'babel-loader',
         exclude: /node_modules/
       },
     ]
   },
  devServer: {
     contentBase: './dist'
   },
   
};