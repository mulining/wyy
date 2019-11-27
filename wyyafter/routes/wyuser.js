//引入express模块
const express = require("express");
//引入数据库连接池模块'
const pool = require("../pool.js");
//创建路由
var router = express.Router();

//具体的路由: resful标准
//用户注册
router.post("/reg",(req,res)=>{
    //解析 :: 接收到用户传来的个人信息（手机号，密码，用户名和昵称默认是手机号，邮箱，注册时间）
    //这里注册的内容是首页面中的手机号注册，只接收手机号和密码，其他是默认
    var obj = req.body;//{ phone: '18834144568', upwd: 'p12306' }
    for(var item in obj){
        if(!item){
            res.write(JSON.stringify({code:100,msg:"用户名或密码不能为空!"}));
            res.end();
            return;
        }
    }
    var sql = "SELECT u_id FROM user WHERE phone=?";
    pool.query(sql,[obj.phone,obj.upwd],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            var sql = "INSERT INTO user (phone,upwd) VALUES(?,?)";
            pool.query(sql,[obj.phone,obj.upwd],(err,result)=>{
                if(err) throw err;
                if(result.affectedRows!==0){
                    res.write(JSON.stringify({code:200,msg:"注册成功"}));
                }else{
                    res.write(JSON.stringify({code:101,msg:"注册失败"}));
                }
                res.end();
            });
        }else{
            res.write(JSON.stringify({code:102,msg:"注册失败,该用户手机号已经被注册,如忘记密码,请点击找回密码找回!"}));
        }
        res.end();
    });
    
});

//用户登录
// 用户手机号 和 密码登录
router.post("/login",(req,res)=>{
    //解析
    var obj = req.body;
    for(var item in obj){
        if(!item){
            res.send({code:-2,msg:"用户名或密码不能为空!"});
            return;
        }
    }
    // 格式验证放在前端页面
    var sql = "SELECT u_id FROM user WHERE phone=? AND upwd=?"
    pool.query(sql,[obj.phone,obj.upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            // 登录成功后,将用户的id放入到session中!否则后期获取不到!
            var uid = result[0].u_id;
            req.session.uid = uid;
            console.log(req.session.uid);
            res.send({code:1,msg:"登录成功!"});
        }else{
            res.send({code:-1,msg:"登录失败"});
        }
    });
});

// 首页用户数据请求
router.get("/indexUser",(req,res)=>{
    var uid = req.session.uid;
    //判断当前是否登录
    if(!uid){
        res.send({code:-1,msg:"请登录!"});
        return;
    }
    // 如果登录返回,用户名和用户头像地址
    var sql = "SELECT unickname,img FROM user WHERE u_id=?";
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send({code:1,msg:"用户登录状态",data:result});
    });
});

// 获取 用户个人信息请求
router.get("/userInfos",(req,res)=>{
    var uid = req.session.uid;
    if(!uid){
        res.send({code:-1,msg:"您还未登录,请先登录!"});
        return;
    }
    var sql = "SELECT unickname,phone,email,img,qq,sex,introself,user_name,otherfindlimit FROM user WHERE u_id=?";
    pool.query(sql,[uid],(err,result)=>{
        if(err)throw err;
        console.log(result);
        res.send({code:1,mag:"用户个人信息数据加载成功!",data:result[0]});
    });
});

// 用户个人信息 -- 资料设置 数据提交
router.get("/userInfoSub",(req,res)=>{
    var uid = req.session.uid;
    if(!uid){
        res.send({code:-1,msg:"您还未登录,请先登录!"});
        return;
    }
    var obj = req.query;
    console.log(obj);
    // 将所有数据转化成符合sql语句的格式
    var sql = `UPDATE user SET unickname=?,phone=?,email=?,qq=?,sex=?,introself=?,user_name=? WHERE u_id=${uid}`; 
    pool.query(sql,[obj.unickname,obj.phone,obj.email,obj.qq,obj.sex,obj.introself,obj.user_name],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"修改成功"});
        }else{
            res.send({code:-2,msg:"修改失败"});
        }
    });
});

// 导航到用户个人主页
router.get('/userindex',(req,res)=>{
    var uid = req.session.uid;
    if(!uid){
        res.send({code:-1,msg:"您还未登录,请先登录~"});
        return;
    }
    res.send({code:1,msg:"查找用户主页"});
});


//退出登陆
router.get("/loginOut",(req,res)=>{
    // 退出登陆
    var uid = req.session.uid;
    if(uid){
        req.sessionStorage.removeItem(uid);
        res.send({code:1,msg:"已退出登陆"});
    }else{
        res.send({code:-1,msg:"退出登陆失败"});
    }
});

//用户权限设置
router.get("/otherfindlimit",(req,res)=>{
    var uid = req.session.uid;
    var lt = req.query.otherfindlimit;
    if(!uid){
        res.send({code:-1,msg:"您已经掉线,请重新登录再尝试~"});
        return;
    }
    var sql = "UPDATE user SET otherfindlimit=? WHERE u_id=?";
    pool.query(sql,[lt,uid],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"修改成功"});
        }else{
            res.send({code:-2,msg:"修改失败"});
        }
    });
});






//导出路由
module.exports = router;















