# webpack-vue-demo
webpack-vue-demo

webpack4
vue
脚手架

包括多页应用
    
```
{  
  "name": "Webpack4-Frame",  
  "version": "0.1.0",  
  "description": "Webpack4-Frame",  
  "main": "index.js",  
  "scripts": {  
    "test": "echo \"Error: no test specified\" && exit 1",  
    "build": "cross-env NODE_ENV=production webpack --progress  --config ./config/webpack.prod.js",  
    "dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot --progress --config ./config/webpack.dev.js"  
  },  
  "author": "shuchong.luan",  
  "license": "ISC",  
  "devDependencies": {  
    "babel-core": "^6.26.3",  
    "babel-loader": "^7.1.5",  
    "babel-preset-env": "^1.7.0",  
    "babel-preset-react": "^6.24.1",  
    "clean-webpack-plugin": "^1.0.0",  
    "cross-env": "^5.2.0",  
    "css-loader": "*",  
    "glob": "^7.1.3",  
    "html-webpack-plugin": "^3.2.0",  
    "mini-css-extract-plugin": "^0.5.0",  
    "node-sass": "*",  
    "optimize-css-assets-webpack-plugin": "^5.0.1",  
    "sass-loader": "*",  
    "style-loader": "*",  
    "vue-loader": "*",  
    "vue-style-loader": "^4.1.2",  
    "vue-template-compiler": "*",  
    "webpack": "^4.27.1",  
    "webpack-cli": "^3.1.2",  
    "webpack-dev-server": "^3.1.10",  
    "webpack-merge": "^4.1.5"  
  },  
  "dependencies": {  
    "lodash": "^4.17.11"  
  }  
}
```

