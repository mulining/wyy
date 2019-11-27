// 此全局组件是用来给每个页面滚动条下拉到指定位置时,显示的侧边栏!!
Vue.component("asideBox",{
  template:`<div class="asideBox">
  <!-- 浮出盒子之上的图片 -->
 <div class="asb_topimg">
   <img src="../img/edu-image/c2d85ad0ca91493c96bdf90c1e2e7fa7.png" class="w-100">
 </div>
 <!-- 下面的三个 -->
 <div class="asb_btn">
   <a href="javascript:;">
     <i></i>
     <span>在线咨询</span>
   </a>
 </div>
 <div class="asb_line"></div>
 <div class="asb_btn position-relative">
   <a href="javascript:;">
     <i></i>
     <span>手机课堂</span>
     <!-- 中间的按钮--弹出框 -->
     <div class="slide_alertBox d-flex justify-content-around align-items-center">
       <div>
         <img src="../img/edu-image/sideBar90.png" width="90">
         <p class="text-muted text-center mb-0 mt-1">下载APP</p>
       </div>
       <div>
         <img src="../img/edu-image/weixin.png" width="90">
         <p class="text-muted text-center mb-0 mt-1">关注微信</p>
       </div>
     </div>
     <div class="triangle"></div>
   </a>
 </div>
 <div class="asb_line"></div>
 <div class="asb_btn">
   <a href="javascript:;">
     <i></i>
     <span onclick="goback()">返回顶部</span>
   </a>
 </div>
</div>`},
);

// 设置侧边栏滚动到指定位置时,才显示,
$(window).scroll(function(){
  console.log($(document).scrollTop());
  if($(document).scrollTop() > 400){
    $(".asideBox").show();
  }else{
    $(".asideBox").hide();
  }
});
function goback(){
  // 回到顶部
  // 智能定时器
  // requestAnimationFrame(goback);
  $('html,body').animate({'scrollTop':0},100);
}

