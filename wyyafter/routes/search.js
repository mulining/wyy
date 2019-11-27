const express = require("express");
//引入数据库pool，请求数据
const pool = require("../pool.js");
var router = express.Router();


// 2019/11/11
// 新增用户搜索路由
// 头部 课程 或 网校 搜索路由
router.get("/course_school",(req,res)=>{
  var key = decodeURI(req.query.key);//用户搜索关键词
  var wyclass = decodeURI(req.query.wyclass);//选择分类-->课程||网校
  console.log(key);
  console.log(wyclass);
  // 判断是课程还是网校
  if(wyclass == "课程"){
    
    // 查询多个数据表的title值是否包含关键词
    // 返回所有数据
  }else{
    // 网校
  }
  // 多表查询
  // sql =  `SELECT * FROM ${} WHERE title LIKE ?`;
  // pool.query(sql,[course],(err,result)=>{
  //   if(err)throw err;
  //   if(result.length>0){
  //     res.send({code:1,msg:"数据查找完成!",data:result});
  //   }else{
  //     res.send({code:-1,msg:"查无此数据!"});
  //   }
  // });
});





// 导出路由
module.exports = router;



