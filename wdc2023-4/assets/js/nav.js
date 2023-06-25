layui.use('layer', function () {
    $('#nav-collapse').toggle();
    var layer = layui.layer;
    $('#mobile-nav').click(function () {
        $('#nav-collapse').toggle();
    });
});