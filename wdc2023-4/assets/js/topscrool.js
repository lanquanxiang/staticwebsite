layui.use(['jquery'], function () {
    var $ = layui.$;
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(this).height();
        var percent = (scrollTop / (scrollHeight - windowHeight)) * 100;
        $('#scroll').css('width', percent + '%');
    });
    $(document).ajaxStart(function () {
        $('#scroll').addClass('active');
    });
    $(document).ajaxStop(function () {
        $('#scroll').removeClass('active');
    });
});