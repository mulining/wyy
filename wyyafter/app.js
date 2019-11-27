const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//引入路由文件
const userRouter = require("./routes/wyuser");
const indexRouter = require("./routes/index.js");
const searchRouter = require("./routes/search.js");
const session = require("express-session");
var app = express();
//服务器监听端口
app.listen(8000);
//实现跨域
app.use(cors({
    origin:['http://localhost:8080','http://127.0.0.1:5500','http://127.0.0.1:5502'],
    credentials:true
}));

//使用session,配置session
app.use(session({
    secret:"128位安全字符串",
    resave:true,         //请求更新数据 
    saveUninitialized:true//保存初始数据
 }));

//中间件
app.use(bodyParser.urlencoded({
    extended:false
}));

//引入静态文件
// app.use(express.static("public"));

//挂载路由
app.use("/wyuser",userRouter);
app.use("/index",indexRouter);
app.use("/search",searchRouter);

















