const http = require('http');
const fs = require('fs');
const path = require('path');
// 搭建服务器
http.createServer((request, response) => {
    if (request.url.indexOf('favicon.ico') !== -1) {
        return;
    }
    response.writeHead(200, {// 设置响应头
        'Content-Type': lastname(path.extname(request.url))
    });
    let pathname = '';
    if (request.url === '/') {
        pathname = path.join(__dirname, 'index.html');
    } else {
        pathname = path.join(__dirname, 'src', request.url);
    }
    response.end(fs.readFileSync(pathname));
}).listen(8899);

const lastname = (na) => {
    switch (na) {
    case '' :
        return 'text/html;charset=utf-8';
    case '.html' :
        return 'text/html;charset=utf-8';
    case '.js' :
        return 'text/javascript';
    case '.css' :
        return 'text/css';
    case '.png' :
        return 'image/png';
    case '.json' :
        return 'text/json';
    }
};