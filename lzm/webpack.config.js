// var webpack = require('webpack');
// var dev;
// module.exports = {
//     //2、进出口文件配置
//     entry:__dirname+'/jsproject/entry.js',//指定的入口文件,“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
//     output: {//输出
//         path: __dirname+'/index',//输出路径
//         filename: 'bundle.js'//输出文件名
//     },
//     module: {//在配置文件里添加加载器说明，指明每种文件需要什么加载器处理
//         loaders: [npm install --save -dev webpack
//             {//json加载器
//                 test: /\.json$/,
//                 loader: "json-loader"//注意-loader不能省略，网上说能省略，经测试编译会报错
//             },
//             {//5、编译es6配置
//                 test:/\.js$/,
//                 exclude:/node_modules/,
//                 loader:'babel-loader',//在webpack的module部分的loaders里进行配置即可
//                 query:{
//                     presets:['es2015','react']
//                 }
//             },
//             {//3、CSS-loader
//                 test:/\.css$/,
//                 loader:'style-loader!css-loader'//添加对样式表的处理
//             }
//
//         ]
//     },
//     //4、服务器依赖包配置
//     devServer: {//注意：网上很多都有colors属性，但是实际上的webpack2.x已经不支持该属性了
//         contentBase: "./index",//本地服务器所加载的页面所在的目录
//         historyApiFallback: true,//不跳转
//         inline: true//实时刷新
//         //hot：true,//不要书写该属性，否则浏览器无法自动更新
//         //publicPath："/asses/",//设置该属性后，webpack-dev-server会相对于该路径
//     },
//     plugins:[]//插件
// }
var webpack = require("webpack");
var path= require("path");
module.exports = {
    entry: __dirname + "/scripts/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/afterWebpack",//打包后的文件存放的地方
        filename: "bundle.js",//打包后输出文件的文件名
        publicPath: "dist/" //images url
    },

    module:{
        rules: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader" //loader or use?
            },
            {
                test: /\.(png|jpg)$/,
                loader: "url-loader?limit=8192"
                // loader: "url-loader?limit=8192&name=images/[hash:8].[name].[ext]"
            },
            // {
            //     test:/\.(gif|png|jpg|woff|svg|ttf|eot)$/,//图片的处理
            //     use: [{
            //         loader: 'url-loader',
            //         options: {
            //             limit: 500,//当图片小于这个值他会生成一个图片的url 如果是一个大于的他会生成一个base64的图片在js里展示
            //             outputPath: 'img/',// 指定打包后的图片位置
            //             name: '[name].[ext]?[hash]',//name:'[path][name].[ext]
            //             //publicPath:output,
            //
            //         }
            //     }, /*{
            //         loader: 'file-loader',
            //         options: {
            //             limit:50,
            //             name: '[name].[ext]?[hash]',
            //             outputPath: 'img/',
            //         }
            //
            //     }*/]
            // },


            // {
            //     test: /\.ttf$/,
            //     // loader: "file-loader"
            //     loader: "url-loader"
            //
            //     // loader: 'file?prefix=font/'
            //     // loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            // }

        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        })
    ],
    resolve: {
        extensions: [ '.js', '.jsx', '.css'],
        // modulesDirectories: [
        //     'node_modules'
        // ]
    }


//     module: {
//         // loaders: [
//         //     {test: /\.css$/,
//         //     loader: "style!css"}
//         // ]
//         // rules: [
//         //     { test: /\.css$/, use: 'css-loader' },
//         //     { test: /\.ts$/, use: 'ts-loader' }
//         // ]
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: [
//                     { loader: ['style-loader'](/loaders/style-loader) },
//                     {
//                         loader: ['css-loader'](/loaders/css-loader),
//                         options: {modules: true}
//                     }
//                     ]
//                  }
//                 ]
// };

    // module: {
    //     //Loaders
    //     rules: [
    //         //.css 文件使用 style-loader 和 css-loader 来处理
    //         {test: /\.css$/, loader: 'style-loader!css-loader'},
    //         {
    //             test: /\.less$/,
    //             loader: 'style-loader!css-loader!less-loader',
    //         },
    //         //.js 文件使用 babel 来编译处理
    //         {test: /\.js$/, loader: 'babel'},
    //         //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
    //         {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    //     ]
    // }
};



// var webpack = require('webpack');
// var path = require('path');
// var buildPath = path.resolve(__dirname, 'afterWebpack');
// var config = {
//     //入口文件
//     entry: {
//         index : './scripts/main.js'
//     },
//     extensions: ['', '.js', '.json', '.css', '.less'],
//     output: {
//         path: buildPath,  //编译后的文件路径
//         filename: 'app.js'
//     },
//     module: {
//         //Loaders
//         loaders: [
//             //.css 文件使用 style-loader 和 css-loader 来处理
//             { test: /\.css$/, loader: 'style-loader!css-loader' },
//             { test: /\.less$/,
//                 loader: 'style-loader!css-loader!less-loader'
//             },
//             //.js 文件使用 babel 来编译处理
//             { test: /\.js$/, loader: 'babel' },
//             //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
//             { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
//         ]
//
//     },
// };
// module.exports = config;
