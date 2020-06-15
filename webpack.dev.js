const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common('Dev Google Phone Gallery'), {
    mode: 'development',
    name: 'dev',
    devServer: {
        hot: true,
        compress: true,
        watchOptions: {
            poll: true
        },
        allowedHosts: [
            'localhost'
        ]
    }
})