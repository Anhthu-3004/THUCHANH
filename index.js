import http from 'http';
import date from "./date";
import {getParamsURl, getPath} from "./getURL";
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    });
    res.write(date() + "<br>");
    res.write(getPath(req) + "<br>");
    res.write(getParamsURl(req) + "<br>");
    res.write('Hello KTPM0121, Chúc Các Bạn Thành Công Với Nodejs');
    res.end();
}).listen(8080);