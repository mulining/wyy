// 二级页面的头部组件
Vue.component("header-menu",{
    template:`<div class="intro_header color_white position-fixed w-100">
    <div class="tab clear_after h-100">
        <div class="float-left d-flex justify-content-around">
            <img src="../img/intro/logo.png" class="mt-3"  width="170" height="29">
            <ul class="d-flex" style="height:60px;line-height:60px;">
                <li class="ml-4 cursor_pointer hoverColor courseClass position-relative">课程分类<dropmenu></dropmenu></li>
                <li class="ml-4 cursor_pointer hoverColor">微专业</li>
                <li class="ml-4 cursor_pointer hoverColor">关注领福利</li>
            </ul>
        </div>
        <div class="float-right d-flex justify-content-around h-100">
            <!--  -->
            <!-- <div class="input-group border h-50 m-3 w-50">
                <div>课程<span></span></div>
                <input type="text" class="form-control h-100" placeholder="行家专业亲授,直击就业痛"/>
                <div></div>
            </div> -->
            <div class="search_box input-group w-75 m-auto">
                <span class="sea_class">
                    <span class="text_small text-muted py-2 pl-3 pr-4 color_white">{{course}}</span>
                    <ul class="dropdown bg-white mt-2 d-none">
                        <li class="dropdown-item indexcolor active px-3" @click="changeCourse('课程','行家专业亲授，直击就业痛点')">课程</li>
                        <li class="dropdown-item hoverColor px-3" @click="changeCourse('网校','搜索网校')">网校</li>
                    </ul>
                </span>
                
                <input type="text" class="form-control border-0 text_small p-2 bg-transparent" :placeholder="intros" onfocus="this.style.color='white'" onblur="if(this.value==''){this.style.color='gray'}"/>
                <button class="btn px-4 border-0 text_small"><span></span></button>
            </div>
            <!--用户数据请求 用户板块切换-->
            <ul class="breadcrumb bg-transparent mb-0 pt-3 mt-1 ml-5 w-100" v-if="!isLogin">
                <li class="breadcrumb-item cursor_pointer">我的学习</li>
                <li class="breadcrumb-item cursor_pointer"></li>
                <li class="breadcrumb-item cursor_pointer"></li>
                <li class="breadcrumb-item cursor_pointer">登录/注册</li>
                <li class="breadcrumb-item cursor_pointer circle_img position-relative">
                    <img src="../img/edu-image/small.jpg" class="circle">
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
            <ul class="breadcrumb bg-transparent mb-0 pt-3 mt-1 ml-5 w-100" v-else>
                <li class="breadcrumb-item cursor_pointer">我的学习</li>
                <li class="breadcrumb-item cursor_pointer"></li>
                <li class="breadcrumb-item cursor_pointer"></li>
                <li class="breadcrumb-item cursor_pointer" v-text="nickname"></li>
                <li class="breadcrumb-item cursor_pointer circle_img position-relative">
                    <img :src="userimg" class="circle">
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
    </div>
</div>`,
components:{dropmenu},
data() {
    return {
        textvalue:'',
        course:"课程",
        intros:'行家专业亲授，直击就业痛点',
        isLogin:false,//默认用户未登录
        nickname : "user123",
        userimg: "../img/edu-image/small.jpg"//默认
    }
},
created() {
    this.myload();
},
methods: {
    // 修改头部课程类别
    changeCourse(course,intro){
        this.course = course;
        this.intros = intro;
    },
    myload(){
        axios.defaults.baseURL=config.baseUrl;
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
                if(userimg){
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
});