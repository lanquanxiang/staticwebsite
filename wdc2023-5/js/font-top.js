$(function () {

    //设置.to_top显示与消失
    var toolTop = $(".introduce").offset().top;
    toggleTool();//封装函数，这样每次刷新页面，就不会用滚动来触发fixedTools的显示与消失
    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $('.to_top').fadeIn();
        } else {
            $('.to_top').fadeOut();
        }
    }
    $(window).scroll(function () {
        toggleTool();
        //页面滚动到某个内容区域,实现动态刷新
    })

    //导航至top：
    $(".to_top").on("click", function () {
        /*  $("body,html").stop().animate({
             scrollTop: 0
         }) */
        // $("body").animate({ "scrollTop": top });
        console.log(11);
        $("html,body").animate({ scrollTop: 0 }, 600);
    })
})