var express = require('express')
var rewrite = require('express-urlrewrite')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var WebpackConfig = require('../webpack.config')

var app = express();

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
    publicPath: '/__build__/',
    stats: {
        colors: true
    }
}));

var fs = require('fs')
var path = require('path')
fs.readdirSync(__dirname).forEach(function (file) {
    if (fs.statSync(path.join(__dirname, file)).isDirectory()) {
        app.use(rewrite('/' + file + '/*', '/' + file + '/index.html'))
    }
})

// todo make router with starter express
app.get('/', function (req, res) {
    res.sendFile(path.resolve('static/index.html'));
});

app.get('/api', function (req, res) {
    const data = { a: 1 };
    console.log(data)
    res.send(data);
});

app.use(express.static(__dirname))

app.listen(8888, function () {
    console.log('Server listening on http://localhost:8888, Ctrl+C to stop')
})
