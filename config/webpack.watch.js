const path = require('path'); //公共模块
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //生产模式使用分离代码插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //生产模式使用压缩代码插件
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
    //"browersync": "npx browser-sync start --proxy \"localhost:10001\" --files \"**/*.css, **/*.html, **/*.js\"",
    //"watch2": "npx concurrently \"npm run watch\" \"npm run browersync\""
module.exports = merge(common, {
    devtool: 'cheap-module-source-map', //生产模式启用代码跟踪
    mode: 'production',
    watch: true,
    output: { //公共output
        path: path.join(__dirname, '../dist'),
        filename: 'js/[name].js?[hash]', //根据入口文件分为不同出口文件
    },
    plugins: [
        new MiniCssExtractPlugin({ //生产模式使用分离代码插件
            filename: 'css/[name].css?[hash]'
        }),
        new OptimizeCssAssetsPlugin({ //生产模式使用压缩代码插件
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
            canPrint: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new BrowserSyncPlugin(
            // BrowserSync options
            {
                // browse to http://localhost:3000/ during development
                host: 'localhost',
                port: 3333,
                server: "./dist",
                files: ["**/*.css", "**/*.html", "**/*.js"],
                ignored:"node_moodules"
                // proxy the Webpack Dev Server endpoint
                // (which should be serving on http://localhost:3100/)
                // through BrowserSync
                //proxy: 'http://localhost:3100/'
            },
            // plugin options
            {
                // prevent BrowserSync from reloading the page
                // and let Webpack Dev Server take care of this
                reload: false
            }
        )
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