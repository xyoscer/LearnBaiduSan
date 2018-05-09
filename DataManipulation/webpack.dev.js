/**
 * Created by XiYin on 09/05/2018.
 */
const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common,{
    mode: 'development',
    devtool: 'inline-source-map',
    devServer:{
        contentBase: path.join(__dirname,"dist"),
        compress: true,
        hot:true,
        port: 8080
    },
    resolve: {
        alias: {
            san: 'san/dist/san.dev.js'
        }
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});