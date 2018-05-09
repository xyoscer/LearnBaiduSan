/**
 * Created by XiYin on 09/05/2018.
 */
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common,{
    mode:'production',
    plugins:[
        new UglifyJSPlugin(),
    ],
    resolve: {
        alias: {
            san: 'san/dist/san.js'
        }
    },
});