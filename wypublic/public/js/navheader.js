// 主页紧挨着最顶部的下一级菜单导航
Vue.component("nav-header",{
    template:`<div class="row position-relative">
    <div class="col-md-6 col-sm-12">
        <ul class="wy_nav list-unstyled d-flex mb-0">
            <li class="pr-4 pb-3 wynav_active">
                <a href="#" class="text-muted menu">首页</a>
            </li>
            <li class="px-4 pb-3 dropdown fenlei_hover">
                <a href="#" class="text-muted menu">课程分类</a>
                <dropmenu></dropmenu>
            </li>
            <li class="px-4 pb-3">
                <a href="#" class="text-muted menu" @click="search">微专业</a>
            </li>
        </ul>
    </div>
    <div class="wy_mav_r col-md-6 d-sm-none d-md-block">
        <ul class="list-unstyled float-right d-flex mb-0">
            <li class="app pt-2 ml-5">
                <a href="#" class="text-muted text_small">关注领福利</a>
                <div class="app_box p-4">
                    <p class="text-center">关注云课堂官方微信账号</p>
                    <p class="text-center text_small text-muted">领取课程免费福利，超值学习资料</p>
                    <img src="../img/edu-image/nav_qrcode.png" class="m-auto d-block"/>
                </div>
            </li>
            <li class="app pt-2 ml-5">
                <a href="#" class="text-muted text_small">下载APP</a>
                <div class="app_box d-flex p-4">
                    <img src="../img/edu-image/nav_qrcode.png" class="mr-4"/>
                    <a href="#" class="text-muted">扫码下载官方APP</a>
                </div>
            </li>
            <li class="pt-2 ml-5"><a href="#" class="text-muted text_small">会员中心</a></li>
        </ul>
    </div>
    <!--微专业上方的动态标签-->
    <div class="animation_Courselabel">新课</div>
</div>`,
components:{dropmenu},
methods: {
    //当我点击搜索时，判断input的值是否存在，如果存在，根据关键词搜索，否则，导航到默认页面
    search(){
       console.log(this.textvalue);
       this.textvalue?window.location.href="./intro.html":window.location.href="./intro.html";
    }
},
});
// <ul class="dropdown-menu border-0 mb-0 shadow-sm">
                //     <li class="px-3 py-2"><a class="text_small font-weight-bold text-muted" href="#">职场提升</a></li>
                //     <li class="px-3 py-2"><a class="text_small font-weight-bold text-muted" href="#">编程与开发</a></li>
                //     <li class="px-3 py-2"><a class="text_small font-weight-bold text-muted" href="#">AI/数据科学</a></li>
                //     <li class="px-3 py-2"><a class="text_small font-weight-bold text-muted" href="#">产品与运营</a></li>
                //     <li class="px-3 py-2"><a class="text_small font-weight-bold text-muted" href="#">设计创意</a></li>
                //     <li class="px-3 py-2"><a class="text_small font-weight-bold text-muted" href="#">电商运营</a></li>
                //     <li class="px-3 py-2"><a class="text_small font-weight-bold text-muted" href="#">语言学习</a></li>
                //     <li class="px-3 py-2"><a class="text_small font-weight-bold text-muted" href="#">职业考试</a></li>
                //     <li class="px-3 py-2"><a class="text_small font-weight-bold text-muted" href="#">生活兴趣</a></li>
                // </ul>