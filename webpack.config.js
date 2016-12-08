/*eslint-disable no-var */
var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
var bourbon = require('bourbon');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var SpritesmithPlugin = require('webpack-spritesmith');

module.exports = {

    devtool: 'inline-source-map',

    entry: './frontend/app.js',

    output: {
        path: __dirname + '/__build__',
        filename: 'app.js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/__build__/'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['react-html-attrs'],
            },
        }, {
            test: /\.html$/,
            loader: 'file?name=[path][name].[ext]&context=./src/main',
        }, {
            test: /\.s?css$/,
            loader: ExtractTextPlugin.extract(("style-loader", "css-loader!sass-loader")),
        }, {
            test: /\.(png|jpg|woff|ttf|woff2)$/,
            loader: 'url?limit=100000',
        }, {
            test: /\.json$/,
            loader: 'json',
        }]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new ExtractTextPlugin("style.css", {
            allChunks: true
        }),
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, 'static/images/sprite_sources'),
                glob: '*.png'
            },
            target: {
                image: path.resolve(__dirname, 'static/images/sprite.png'),
                css: path.resolve(__dirname, 'frontend/styles/base/_sprite.scss')
            },
            apiOptions: {
                cssImageRef: "/static/images/sprite.png"
            }
        })
    ],

    query: {
        presets: [
            'babel-preset-stage-0',
        ].map(require.resolve),
    }

}