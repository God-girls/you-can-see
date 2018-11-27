var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpackBaseConfig = require('./webpack.base.conf')

module.exports = merge(webpackBaseConfig, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"develop"'
            }
        })
    ],
    devServer: {
        noInfo: true,
        quiet: true,
    },
    server: {
        port: 5678, // server port
        proxy: {
            host: 'http://localhost:2111',
            match: '^(/seller_api/v1/|/bhu_commdity_api/|/websock_m/|/websock_c/)'
        }
        
    }
})