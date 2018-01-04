var express = require('express');
var dbconf = require('../../conf/dbconfig');
var mysql = require('mysql');

var pool = mysql.createPool(dbconf);
var sql = {
    userByID: 'select * from account where account= ? and password = ?'
};
module.exports = {
    login:async function (req, res, callback) {
        pool.getConnection(function (err, cont) {
            var name = req.body.account,
                pwd = req.body.pwd,
                status=true;
            cont.query(sql.userByID, [name, pwd], function (err, rows) {
                if (rows.length) {
                    req.session.user = rows[0];
                    req.session.cookie.maxAge = 1000 * 60 * 3;
                    res.json = rows[0];
                } else {
                    res.json = {
                        code: 1,
                        msg: '用户名或密码错误！'
                    }
                    status=false;
                }
                cont.release();
                callback(res, status);
            });
        });
    }
};