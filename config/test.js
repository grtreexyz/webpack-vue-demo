const path = require("path")
const express = require("express")
const webpack = require("webpack")
const webpackDevMiddleware = require("webpack-dev-middleware")
const WebpackHotMiddleware = require('webpack-hot-middleware')
const proxy = require('http-proxy-middleware');
const webpackConfig = require('./webpack.watch.js')
const app = express(),
      DIST_DIR = path.join(__dirname, "dist"),// 设置静态访问文件路径
      PORT = 9090, // 设置启动端口
      complier = webpack(webpackConfig) 

app.use(webpackDevMiddleware(complier, {
    // 这里是对 webpackDevMiddleware 的一些配置，具体其他配置我们下面已经列出来了。

    //绑定中间件的公共路径,与webpack配置的路径相同
    publicPath: webpackConfig.output.publicPath,
    quiet: true  //向控制台显示任何内容 
}))

// 这个方法和下边注释的方法作用一样，就是设置访问静态文件的路径
//app.use(express.static(DIST_DIR)) 
app.use(proxy({
	target: 'http://localhost:10001',
	changeOrigin: false
})); 

// app.get("*", (req, res, next) =>{
//     const filename = path.join(DIST_DIR, 'index.html');

//     complier.outputFileSystem.readFile(filename, (err, result) =>{
//         if(err){
//             return(next(err))
//         }
//         res.set('content-type', 'text/html')
//         res.send(result)
//         res.end()
//     })
// })

app.listen(PORT,function(){
    console.log("成功启动：localhost:"+ PORT)
})