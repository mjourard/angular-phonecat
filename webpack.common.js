const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = title => {
    return {
        entry: {
            app: './app/app.module.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: title,
                template: './app/index.html',
                inject: true
            }),
            new CopyPlugin({
                patterns: [
                    {
                        from: './**/*.html',
                        to: '[path]/[name].[ext]',
                        context: './app/'
                    },
                    {from: './**/*.css', to: '[path]/[name].[ext]', context: './app/'},
                    {from: 'img/**', to: '[path]/[name].[ext]', context: './app/'},
                    {from: 'phones/**', to: '[path]/[name].[ext]', context: './app/'}
                ]
            })
        ],
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif|ico)$/,
                    use: [
                        'file-loader'
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        'file-loader'
                    ]
                },
            ]
        }
    }
}