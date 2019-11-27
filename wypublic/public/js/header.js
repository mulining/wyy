// 主页最顶部组件
Vue.component("wyheader",{
    template:`<div id="headers" class="header_r1 row my-lg-4">
    <div class="logo col-lg-3 col-sm-12">
        <img src="../img/edu-image/51373455cc3e4a96a802e89387cb868c.png-imageView&quality=100.png" class=""/>
    </div> 
    <div class="indexsearchbox col-lg-5 col-sm-12">
        <div class="search_box input-group w-75 m-auto">
            <span class="show_mydropdown_menu text_small text-muted py-2 pl-3 bg-white" onmouseover="show()">
                {{course}}
                <div class="downicon"></div>
            </span>
            <input v-model="textvalue" type="text" class="form-control border-0 text_small p-2" :placeholder="intros"/>
            <button @click="search" class="btn px-4 border-0 text_small">搜索</button>
        </div>
        <ul class="dropdown bg-white" style="display:none;" onmouseover="show()" onmouseout="hide()">
            <li class="dropdown-item indexcolor active px-3" @click="changeCourse('课程','行家专业亲授，直击就业痛点')">课程</li>
            <li class="dropdown-item hoverColor px-3" @click="changeCourse('网校','搜索网校')">网校</li>
        </ul>
    </div>
    <div class="col-lg-4 col-sm-12">
    <!--判断用户是否登录,如果登录显示用户登录页面-->
        <ul class="info breadcrumb float-right bg-transparent" v-if="!isLogin">
            <li class="breadcrumb-item"><a href="#" class="">管理后台</a></li>
            <li class="breadcrumb-item"><a href="#" class="">我的学习</a></li>
            <li class="breadcrumb-item"><a href="#" class="header_lingdang_icon"></a></li>
            <li class="breadcrumb-item"><a href="#" class="header_shop_icon"></a></li>
            <li class="breadcrumb-item log"><a href="#" data-target="#login" data-toggle="modal">登录/注册</a></li>
            <li class="circle_img breadcrumb-item">
                <a href="#" class=""><img src="../img/edu-image/small.jpg"/></a>
                <div class="alertBox">
                    <div class="sj"></div>
                    <ul class="py-1">
                        <li data-target="#login" data-toggle="modal" class="pb-2"><a href="javascript:;">游客,请登录</a></li>
                        <li data-target="#login" data-toggle="modal"><a href="javascript:;">我的优惠券</a><span>兑换</span></li>
                        <li data-target="#login" data-toggle="modal"><a href="javascript:;">我的订单</a></li>
                        <li data-target="#login" data-toggle="modal"><a href="javascript:;">帮助与反馈</a></li>
                        <li data-target="#login" data-toggle="modal"><a href="javascript:;">设置</a></li>
                    </ul>
                </div>
            </li>
        </ul>
        <ul class="info breadcrumb float-right bg-transparent" v-else>
            <li class="breadcrumb-item"><a href="#" class="">管理后台</a></li>
            <li class="breadcrumb-item"><a href="#" class="">我的学习</a></li>
            <li class="breadcrumb-item"><a href="#" class="header_lingdang_icon"></a></li>
            <li class="breadcrumb-item"><a href="#" class="header_shop_icon"></a></li>
            <li class="breadcrumb-item log"><a href="javascript:;" @click="userIndex" v-text="nickname"></a></li>
            <li class="circle_img breadcrumb-item">
                <a href="#" class=""><img :src="userimg"/></a>
                <div class="alertBox">
                    <div class="sj"></div>
                    <ul class="py-1">
                        <li class="pb-2"><a href="javascript:;">正在使用手机号登陆</a></li>
                        <li><a href="javascript:;">我的优惠券</a><span>兑换</span></li>
                        <li><a href="javascript:;">我的订单</a></li>
                        <li><a href="javascript:;">帮助与反馈</a></li>
                        <li><a href="setting.html">设置</a></li>
                        <li class="pt-2"><a href="javascript:;" @click="quite">退出</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
 </div>`,
//  ../img/edu-image/small.jpg
 data(){
    return {
        textvalue:'',
        course:"课程",
        intros:'行家专业亲授，直击就业痛点',
        isLogin:false,//默认用户未登录
        nickname : "user123",
        userimg: "../img/user/001/001.jpg"//默认
    };
 },
 created() {
     this.myload();
 },
 updated() {
     this.myload();
 },
 methods: {
     //当我点击搜索时，判断input的值是否存在，如果存在，根据关键词搜索，否则，导航到默认页面
     search(){
         if(!this.textvalue.trim()){
             this.textvalue?window.location.href="./intro.html":window.location.href="./intro.html";
         }else{
            //  发送axios数据
            // obj 包括-->关键词/搜索类别
            // var obj = {keyword : encodeURI(this.textvalue) , wyclass : encodeURI(this.course)};
            // 连接字符串,将数据拼接到url中,导航到查询页面
            var url = `course_search.html?keyword=${this.textvalue}&wyclass=${this.course}`;
            window.location.href = url;
            // axios.get("/search/course_school",{params:obj})
            // .then(res=>{
            //     console.log(res);
            // })
            // .catch(err=>{
            //     console.log(err);
            // });
         }
     },
     changeCourse(course,intro){
        this.course = course;
        this.intros = intro;
     },
    //  数据请求
     myload(){
        var url = "/wyuser/indexUser";
        axios.get(url)
        .then(res=>{
            if(res.data.code == 1){
                // 登录成功
                this.isLogin = true;
                var nickname = res.data.data[0].unickname;
                var userimg = res.data.data[0].img;
                if(nickname){
                    this.nickname = nickname;
                }
                if(img){
                    this.userimg = userimg;
                }
            }else{
                this.isLogin = false;
            }
        })
        .catch(err=>{
            console.log(err);
        });
     },
    //  用户主页请求路由
     userIndex(){
        var url = "/wyuser/userindex";
        axios.get(url)
        .then(res=>{
            console.log(res)
            if(res.data.code == 1){
                window.location.href = "user.html";
            }else{
                alert("您还未登录,请先登录!");
            }
        })
        .catch(err=>{
            console.log(err)
        })
     },
    //  退出登陆
    quite(){
        axios.get('/wyuser/loginOut')
        .then(res=>{
            console.log(res);
            if(res.data.code = 1){
                window.location.href="index.html"
            }else{
                alert("退出登陆失败");
            }
        })
        .catch()
    },
 },
})

function show(){
    $(".indexsearchbox .dropdown").show();
}
function hide(){
    $(".indexsearchbox .dropdown").hide();
}