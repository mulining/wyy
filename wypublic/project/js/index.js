//具体的业务逻辑
$(function(){//3.最后执行这里
    function indexHander(result){
        console.log(result);
         let [slides,system,live,major,wykill,web] = result;
        console.log(wykill)
        new Vue({
            el:"#pageIndex",
            data:{
                slides,
                system,
                live,
                major,
                wykill,
                web
            }
        });
    }
//1.先执行下面，调用js/apis/index.js中的ajax获取数据
    (async function(){
        try{
            var arr = [];
            arr.push(await index.getslides());
            arr.push(await index.getsystem());
            arr.push(await index.getlive());
            arr.push(await index.getmajor());
            arr.push(await index.getwykill());
            arr.push(await index.getweb());
            indexHander(arr);//2.调用上面的业务函数，处理收到的数据
        }catch(err){
            console.log(err);
        }
    })()
})