const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/js/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist/js/'),
        filename: '[name].[chunkhash:8].js'
        //filename: '[name].js'
    },
    //mode: 'production', //development
    module: {
        rules: [
            // {
            //   test: /\.css$/,
            //   use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
            // },
            // {
            //   test: /\.less$/i,
            //   use: extractLESS.extract([ 'css-loader', 'less-loader' ])
            // },
            // { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude:     /node_modules/ },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?cacheDirectory'
            },
            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //     use: [
            //         { loader: "style-loader" },
            //         { loader: "css-loader" }
            //     ]
            // },
            // {
            //     test: /\.scss$/,
            //     exclude: /node_modules/,
            //     use: [
            //         { loader: "style-loader" },
            //         { loader: "css-loader" },
            //         { loader: "sass-loader" }
            //     ]
            // }
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    externals: {
        jquery: 'jQuery',
        vue: 'vue',
        lodash: 'lodash'
    },
    // devServer: {
    //     contentBase: './dist',
    //     hot: true
    // },
    plugins: [
        //new CleanWebpackPlugin(),
        //new webpack.NoErrorsPlugin()
        //new webpack.HotModuleReplacementPlugin(),
        //new webpack.optimization.minimize(),
        // new MiniCssExtractPlugin({
        //     // 从js文件中提取出来的 .css文件的名称
        //     filename: path.join(__dirname, 'dist/css/[name].css'),
        //     //chunkFilename: path.join(__dirname, 'dist/css/[id].css'),
        // }),
        new HTMLWebpackPlugin({
            // title: 'Hello World app',
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true // 压缩内联css
            },
            template: path.join(__dirname, './src/index.html'), // 源文件
            filename: path.join(__dirname, './dist/index.html'), // 输出在服务器根目录的文件名, 文件存放在内存中, 不会在磁盘上显示
            //chunks: ['index'],
            hash: false, //bundle.js?22b9692e22e7be37b57e
        }),
    ]
};