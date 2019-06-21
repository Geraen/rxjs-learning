const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './index.ts',
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin()],
    module: {
        rules: [
            {
                test: /.(ts|tsx)?$/,
                loader: 'ts-loader',
                include: [],
                exclude: [/node_modules/]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/
                }
            },
            chunks: 'async',
            minChunks: 1,
            minSize: 30000,
            name: true
        }
    },
    devServer: {
        open: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
};
