const texts = ['祝愿攀枝花学院40周年庆典圆满成功，再创华章！',
    '衷心祝福攀枝花学院在未来的岁月里继续蓬勃发展。',
    '感谢攀枝花学院为教育事业做出的贡献，祝福学院更上一层楼！',
    '40载春华秋实，攀枝花学院见证了无数个辉煌瞬间，祝福学院再创佳绩！',
    '祝攀枝花学院师生、校友身体健康，家庭幸福，万事如意！',
    '在攀枝花学院这个大家庭里度过的每一个时光都值得珍藏，祝愿学院40周年纪念日永远铭刻在大家的心中！',
    '攀枝花学院的成长与壮大离不开每一位老师和同学的努力，感谢你们的付出和奉献！',
    '祝愿攀枝花学院在教育事业中越走越远，成为更加辉煌的学府。',
    '祝愿攀枝花学院40周年庆典更加精彩，让我们共同见证这个历史时刻！',
    '祝愿攀枝花学院建校40周年，未来40年更加美好、繁荣。',
    '40年风雨历程铸就了攀枝花学院的辉煌成就，预祝学院再创新的辉煌！',
    '祝福攀枝花学院教育事业蒸蒸日上，为国家培养更多优秀人才！',
    '攀枝花学院的发展得益于每一位工作人员和校友的努力，感谢你们为学院付出的一切！',
    '祝愿攀枝花学院在未来的发展中不断创新，做出更大的贡献！',
    '感谢攀枝花学院为我国教育做出的贡献，衷心祝愿学院更上一层楼！',
    '祝攀枝花学院越办越好，为社会培养更多的人才！',
    '祝愿攀枝花学院师生团结协作，携手并进，实现更加辉煌的未来！',
    '祝愿攀枝花学院40周年庆典取得圆满成功，为学院的未来发展注入新的能量！',
    '攀枝花学院是我们共同的家园，祝福这个大家庭更加和谐、美好！',
    '让我们共同努力，为攀枝花学院的未来发展献出自己的一份力量！']

$('#submitDm').click(() => {
    if($('#Dmtext').val().length>5){
        texts.push($('#Dmtext').val())
        $('#Dmtext').val('')
        console.log(texts)
    }

})

$(document).ready(function () {
    var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    var index = 0;
    setInterval(function () {
        for (var i = 0; i < 5; i++) {
            var text = texts[Math.floor(Math.random() * 20)];
            var color = colors[index];
            index = (index + 1) % colors.length;
            var speed = Math.floor(Math.random() * 5) + 10;
            var top = Math.floor(Math.random() * ($('#container').height() - 20));
            var $barrage = $('<div>').addClass('barrage').text(text).css({
                color: color,
                fontSize: Math.floor(Math.random() * 16) + 14 + 'px',
                top: top + i * 36
            }).appendTo('#container');
            var right = $('#container').width();
            $barrage.animate({
                right: right
            }, speed * 1000, 'linear', function () {
                $(this).remove();
            });
        }
    }, 5000);
});