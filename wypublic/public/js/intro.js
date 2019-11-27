/*
使用jquery编写
*/
/*导航栏顶部悬停*/
(()=>{
    window.onscroll=function(){
        //this.document.documentElement.scrollTop
        //应该判断元素再距离页面顶部的位置为0时，设置其样式
        var $eleTop = $(".bodynav").offset().top-$(window).scrollTop();
        var $bottom = $(".ads").offset().top-$(window).scrollTop();
        if($eleTop<=60){
            $(".fixednav").addClass("nav_fixed");
            $(".shaixuan").addClass("navx_fixed");
            $(".bodyitem").addClass("mt-60");
        }else{
            $(".fixednav").removeClass("nav_fixed");
            $(".shaixuan").removeClass("navx_fixed");
            $(".bodyitem").removeClass("mt-60");
        }
        if($bottom<358){
            $(".shaixuan").removeClass("navx_fixed").addClass("navx_posi").parent().addClass("navfather_posi");;
        }else{
            $(".shaixuan").removeClass("navx_posi").parent().removeClass("navfather_posi");
         }
    }
})()