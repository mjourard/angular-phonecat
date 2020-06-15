const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common('Trick or Eat'), {
    mode: 'production',
    name: 'prod',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinPlugin({})
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            }),
        ],
    },
});
