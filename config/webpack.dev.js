const path = require('path'); //公共模块
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map', //开发模式启用代码跟踪
    mode:"development",
    output: { //公共output
        path: path.join(__dirname, '../dist'),
        filename: process.env.NODE_ENV == "production" ? 'js/[name].[chunkhash:6].js' : 'js/[name].js', //根据入口文件分为不同出口文件
    },
    devServer: { //开发模式启用服务器
        contentBase: '../dist',
        port: 8988,
        compress: true
    }
});