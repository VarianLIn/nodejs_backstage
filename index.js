/*
 * @Author: Varian LIn
 * @Date: 2022-08-14 14:39:56
 * @LastEditors: Varian LIn
 * @LastEditTime: 2024-10-11 19:04:34
 * @Description:
 */

/**
 * 定义常量
 */
const port = 9002; // 端口号

/* 引入express框架 */
const express = require('express');
const app = express();
// const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

/**
 * 导入相关函数
 */
// const mysqlDAO = require('./mysql.js');
// const utils = require('./utils/index.js');

/* 设置请求文件大小 */
app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

console.log(path.join(__dirname, '/public'));

/* 静态资源托管 */
app.use('/static', express.static(path.join(__dirname, '/public')));

/* 跨域 */
app.all('*', function (req, res, next) {
    if (!req.get('Origin')) return next();
    // use "*" here to accept any origin
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET', 'POST');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    // res.set('Access-Control-Allow-Max-Age', 3600);
    if ('OPTIONS' == req.method) return res.send(200);
    next();
});

// 服务启动验证
app.get('/', (req, res) => {
    res.send(`<p style="color:red">服务已启动</p>`);
});

/* 监听端口 */
app.listen(port, () => {
    console.log(`listen:${port}`);
});
