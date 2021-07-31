const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    mode = 'production',
} = require('minimist')(process.argv.slice(2));

module.exports = {
    mode,
    context: path.join(__dirname, '..', 'src'),
    entry: './index.js',
    output: {
        path: path.join(__dirname, '..', '..', '..', 'build'),
        filename: '[name].js',
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
            'WebComponent': path.join(__dirname, '..', 'src', 'wrappers'),
            'Component': path.join(__dirname, '..', 'src', 'components'),
            'Action': path.join(__dirname, '..', 'src', 'actions'),
            'Api': path.join(__dirname, '..', 'src', 'apis'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            MODE: JSON.stringify(mode),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        '@babel/preset-react',
                        '@babel/preset-env'
                    ],
                    plugins: [
                        '@babel/plugin-transform-runtime',
                        ['@babel/plugin-proposal-decorators', {decoratorsBeforeExport: true}],
                    ],
                },
            },
        ],
    },
};
