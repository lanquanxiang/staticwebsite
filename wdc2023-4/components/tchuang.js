if (sessionStorage.getItem('weltanchuang') != 1) {
    layui.use(['layer'], function () {
        var layer = layui.layer;
        var content = '<div style="padding: 20px;font-size: 20px">欢迎访问<br>让我们一同祝福攀枝花学院40岁生日快乐</div>';
        layer.open({
            type: 1,
            title: 'Welcome',
            skin: 'layui-layer-lan',
            shadeClose: true,
            area: ['500px', '150px'],
            content: content,
        });

        sessionStorage.setItem('weltanchuang', 1)
        console.log(localStorage.getItem('weltianchuang'));
        setTimeout(function () {
            layer.closeAll();
        }, 2000);
    });
}