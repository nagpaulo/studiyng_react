const webpack = require('webpack');

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8000,
        contentBase: './public',
    },
    module: {
        loaders: [{
            test: '/.jsx?$',
            loader: 'babel-loder',
            exclude: '/node_modules/',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}