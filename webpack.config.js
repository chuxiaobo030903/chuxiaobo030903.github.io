//NodeJS中的Path对象，用于处理目录的对象，提高开发效率
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');  //分离css单独打包插件
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['babel-polyfill', './src/main.js']//入口文件,字符串或数组或者是对象所表示的含义不一样
    },
    // output参数是个对象，用于定义构建后的文件的输出。
    output: {
        path: path.resolve(__dirname, './dist'),//定义用来存放打包后文件的输出目录
        publicPath: '/dist/',//指定资源文件引用的目录
        filename: '[name].js',
    },
    module: {
        //rules 来指定规则，它是一个数组，里面是每一个对象，对不同的文件指定具体的规则。
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({use: ['css-loader', 'sass-loader'], fallback: 'style-loader',})
            },
        ]
    },
    //引入第三方插件
    plugins: [
        new ExtractTextPlugin({
            filename: 'index.css',
            disable: false,
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            title: 'ccui',
            hash: true,
            filename: 'index.html'
        }),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        })
    ],
    resolve: {
        //创建 import 或 require 的别名
        alias: {
            //'vue$': 'vue/dist/vue.esm.js',
            'vue': 'vue/dist/vue.js',
            'src': path.resolve(__dirname, './src'),
            'assets': path.resolve(__dirname, './src/assets'),
        }
    },
    //webpack-dev-server配置
    devServer: {
        historyApiFallback: true,//不跳转
        noInfo: true,
        inline: true,//实时刷新
        port: 8080,
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
