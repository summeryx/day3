var http = require('http');
// var querystring = require('querystring');
// var url = require('url');
http.createServer((req, res) => {
    if (req.url.indexOf('favicon.ico') !== -1) {
        return;
    };
    // 用get传递时，用这两个方法接受参数
    // const format = url.parse(req.url).query;
    // const name = querystring.parse(format).user;
    // res.end('hello:' + name);
    // 用post传递
    let str = '';
    let obj = {};
    req.on('data', chunk => {
        str += chunk;
        str = str.split('&').forEach((file) => {
            obj[file.split('=')[0]] = file.split('=')[1];
        });
    });
    req.on('end', () => {
        res.end('hello:' + obj.user);
    });
}).listen(9999);