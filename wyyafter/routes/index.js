const express = require("express");
//引入数据库pool，请求数据
const pool = require("../pool.js");
var router = express.Router();


//这个路由返回的是主页中轮播图的数据
router.get('/slide',(req,res)=>{
    var sql = 'select * from slide';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.write(JSON.stringify(result));
        res.end();
    });
});
//系统化学习
router.get('/system',(req,res)=>{
    var sql = 'select * from system';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.write(JSON.stringify(result));
        res.end();
    });
});

//课堂直播
router.get('/live',(req,res)=>{
    var sql = 'select * from live';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.write(JSON.stringify(result));
        res.end();
    });
});

//微专业
router.get('/major',(req,res)=>{
    var sql = 'select * from major';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.write(JSON.stringify(result));
        res.end();
    });
});

//限时秒杀
router.get('/wykill',(req,res)=>{
    var sql = 'select * from wykill';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.write(JSON.stringify(result));
        res.end();
    });
});

//前端课程
router.get('/web',(req,res)=>{
    var sql = 'select * from web';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.write(JSON.stringify(result));
        res.end();
    });
});


//导出路由
module.exports=router;