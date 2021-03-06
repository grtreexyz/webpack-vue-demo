const path = require('path'); //公共模块
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //生产模式使用分离代码插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //生产模式使用压缩代码插件

module.exports = merge(common, {
    //devtool: 'cheap-module-source-map', //生产模式启用代码跟踪
    mode:'production',
    output: { //公共output
        path: path.join(__dirname, '../dist'),
        filename: process.env.NODE_ENV == "production" ? 'js/[name].[chunkhash:6].js' : 'js/[name].js', //根据入口文件分为不同出口文件
    },
    plugins: [
        new MiniCssExtractPlugin({ //生产模式使用分离代码插件
            filename: 'css/[name].[chunkhash:6].css'
        }),
        new OptimizeCssAssetsPlugin({ //生产模式使用压缩代码插件
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
            canPrint: true
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                //生产打包公共模块
                commons: {
                    chunks: 'initial', //initial表示提取入口文件的公共部分
                    minChunks: 2, //表示提取公共部分最少的文件数
                    minSize: 0, //表示提取公共部分最小的大小
                    name: 'commons' //提取出来的文件命名
                }
            }
        }
    }
});