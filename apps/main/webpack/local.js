const path = require('path');
const merge = require('webpack-merge');
const base = require('./base');
const {
    port = 8080,
    backend = 'http://eaist-demo2.proitr.ru/'
} = require('minimist')(process.argv.slice(2));

module.exports = merge(base, {
    devtool: 'eval-source-map',
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                {
                    from: /.*/, to: '/module/nsi/static/'
                },
            ],
        },
        contentBase: false,
        compress: true,
        host: '0.0.0.0',
        port: port,
        overlay: {
            warnings: false,
            errors: true
        },
        publicPath: '/module/nsi/static/',
        proxy: {
            '/module/nsi/static/apps/**': {
                target: backend,
                secure: false,
                changeOrigin: true
            },
            '!/module/nsi/static/**': {
                target: backend,
                secure: false,
                changeOrigin: true
            }
        },
        watchOptions: {
            poll: false,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
        }
    }
});
