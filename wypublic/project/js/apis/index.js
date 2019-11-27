/*
请求首页商品信息！
*****************************************
ajax,前后端分离；工作明确
ajax专门管理数据传输
*/
axios.defaults.baseURL=config.baseUrl;
//请求主页轮播图
let index = {
    getslides:function(){
        //版本更新：使用axios版的ajax传出数据
        //请求了轮播图数据
        return new Promise((resolve,reject)=>{
            axios.get("/index/slide")
            .then(result=>{
                resolve(result.data)
            })
            .catch(()=>{reject("请求首页轮播图出错！")});
        })
        //使用jQuery的ajax请求轮播图数据
        // return new Promise(function(resolve,reject){
        //     $.ajax({//请求主页轮播图数据
        //         url:config.baseUrl+"/index/slide",
        //         type:"get",
        //         dataType:"json",
        //         success: function(result) {
        //             resolve(result);
        //         },
        //         error:function(){
        //             reject("请求首页商品出错！");
        //         }
        //     })
        // });
    },
    // getsystem:function(){
    //     return axios.get("/index/system");
    // }
    //请求系统化学习
    getsystem:function(){
        return new Promise((resolve,reject)=>{
            axios.get("/index/system")
            .then(result=>{
                resolve(result.data)
            })
            .catch(()=>{reject("请求首页系统化学习出错！")});
        })
    },
    //请求了课堂直播数据
    getlive:function(){
        return new Promise((resolve,reject)=>{
            axios.get("/index/live")
            .then(result=>{
                resolve(result.data)
            })
            .catch(()=>{reject("请求首页课堂直播出错！")});
        })
    },
    //请求了微专业数据
    getmajor:function(){
        return new Promise((resolve,reject)=>{
            axios.get("/index/major")
            .then(result=>{
                resolve(result.data)
            })
            .catch(()=>{reject("请求首页课堂直播出错！")});
        })
    },
    //请求限时秒杀数据
    getwykill:function(){
        return new Promise((resolve,reject)=>{
            axios.get("/index/wykill")
            .then(result=>{
                resolve(result.data)
            })
            .catch(()=>{reject("请求首页课堂直播出错！")});
        })
    },
    //请求首页前端课程数据
    getweb:function(){
        return new Promise((resolve,reject)=>{
            axios.get("/index/web")
            .then(result=>{
                resolve(result.data)
            })
            .catch(()=>{reject("请求首页前端课程出错！")});
        })
    }
}


