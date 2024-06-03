var slide = document.getElementById('slide');//获取外层div
var bg = document.querySelector('.bg');
var image = document.querySelector('.image');//获取图片
var select = document.querySelector('.select');
var dian = document.getElementsByClassName('dian');//获取小圆点的样式
var left = document.querySelector('.left');//获取左边div
var right = document.querySelector('.right');//获取右边div
/*数组，图片的地址*/
var picture = ['../img/背景6.jpg', '../img/背景7.jpg', '../img/背景8.jpg', '../img/背景9.jpg'];
var index = 0;
/*添加小圆点*/
for (let i = 0; i < picture.length; i++) {
    let dot = document.createElement('div');
    dot.classList.add('dian');
    select.appendChild(dot);
    /*对应每张图片的下标*/
    dot.bianhao = i;
}
/*清除所有小圆点check样式*/
function qingchu() {
    for (let i = 0; i < dian.length; i++) {
        dian[i].classList.remove('check');
    }
}
/*切下一张图*/
function yunxing() {
    /*index加1*/
    index = index + 1;
    if (index == picture.length) {
        index = 0;
    }
    /*显示图片*/
    image.src = picture[index];
    /*小圆点的显示*/
    qingchu();
    /*显示那张图就显示对于的圆点，给他.check的样式*/
    dian[index].classList.add('check');
    /*若index超过，回到-1*/
    if (index == picture.length - 1) {
        index = -1;
    }
}
/*点击向右按钮时的操作*/
right.addEventListener('click', function () {
    /*直接用上面的切图函数*/
    yunxing();
})
/*点击向左按钮时的操作，跟上面的切下张图函数差不多*/
left.addEventListener('click', function () {
    index = index - 1;
    if (index == -1) {
        index = picture.length - 1;
    }
    image.src = picture[index];
    bg.style.cssText = 'background-image: url(${picture[index]});'
    /*向左时小圆点的显示*/
    qingchu();
    dian[index].classList.add('check');
})
/*进入slide这个底层盒子时，停止自动轮播和.yun类的动画效果*/
slide.addEventListener('mouseover', function () {
    clearInterval(lunbo);
    image.classList.remove('yun');
})
/*离开slide这个底层盒子时，开始自动轮播和.yun类的动画效果*/
slide.addEventListener('mouseout', function () {
    lunbo = setInterval(yunxing, 5000);
    image.classList.add('yun');
    image.style.animationDelay = '5s';
})
/*点击小圆点时的切图操作*/
for (let i = 0; i < picture.length; i++) {
    dian[i].addEventListener('click', function () {
        qingchu();
        this.classList.add('check');
        index = i;
        image.src = picture[index];
        bg.style.cssText = 'background-image: url(${picture[index]});'
    })
}
/*自动轮播定时器与初始状态*/
lunbo = setInterval(yunxing, 5000);
image.classList.add('yun');
dian[0].classList.add('check');

/*页面滚动时的动画*/

//获取四张图片
var hh = document.querySelector(".t1");
var hh2 = document.querySelector(".t2");
var hh3 = document.querySelector(".t3");
var hh4 = document.querySelector(".t4");

//获取每个标题的背景图片
var yu1 = document.querySelector(".yu1");
var yu2 = document.querySelector(".yu2");
var yu3 = document.querySelector(".yu3");
var yu4 = document.querySelector(".yu4");

var masking_out = document.querySelector(".masking_out");//获取蒙版div
var left1 = document.querySelector(".left1");//获取概况左边div
var right1 = document.querySelector(".right1");//获取公司概况右边div
var pc1 = document.querySelector(".pc1");//获取新闻中心左侧上方div
var pc2 = document.querySelector(".pc2");//获取新闻中心左侧下方div
var right2 = document.querySelector(".right2");//获取新闻中心右侧div
var TOP1 = document.getElementById("TOP1");//获取超链接书签
var SPAN = document.getElementById("SPAN");//获取提示框

//获取5个li标签
var li1 = document.querySelector(".Li1");
var li2 = document.querySelector(".Li2");
var li3 = document.querySelector(".Li3");
var li4 = document.querySelector(".Li4");
var li5 = document.querySelector(".Li5");

//用js检测鼠标滚轮距离顶部位置来给div添加动画
window.onscroll = function () {
    //检测鼠标滚轮距离顶部位置
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(top);
    //要设置到DIV显示出来时给div添加动画

    if (top > (hh.offsetTop - hh.offsetHeight + 600)) {//第一张图片出场
        hh.style.animation = "zhankai 1s linear 1";
    }
    if (top > (hh2.offsetTop - hh2.offsetHeight + 600)) {//第二张图片出场
        hh2.style.animation = "zhankai 1s linear 1";
    }
    if (top > (hh3.offsetTop - hh3.offsetHeight + 600)) {//第三张出场
        hh3.style.animation = "zhankai 1s linear 1";
    }
    if (top > (hh4.offsetTop - hh4.offsetHeight + 600)) {//第四张图片出场
        hh4.style.animation = "zhankai 1s linear 1";
    }
    if (top > (yu1.offsetTop - yu1.offsetHeight + 50)) {//第一个标题的鱼儿背景出场
        yu1.style.animation = "rx 1s linear 1";
    }
    if (top > (yu2.offsetTop - yu2.offsetHeight + 900)) {//第二个标题的鱼儿背景出场
        yu2.style.animation = "rx 1s linear 1";
    }
    if (top > (yu3.offsetTop - yu3.offsetHeight + 1500)) {//第三个标题的鱼儿背景出场
        yu3.style.animation = "rx 1s linear 1";
    }
    if (top > (yu4.offsetTop - yu4.offsetHeight + 2200)) {//第四个标题的鱼儿背景出场
        yu4.style.animation = "rx 1s linear 1";
    }
    if (top > (masking_out.offsetTop - masking_out.offsetHeight + 1100)) {//左侧轮播图片的墨水蒙版出场
        masking_out.style.animation = "left1 1s linear 1";
    }
    if (top > (left1.offsetTop - left1.offsetHeight + 1100)) {//左侧轮播图片出场与执行
        left1.style.animation = "lunbo2 20s 1s infinite,left1 1s linear 1";
    }
    if (top > (right1.offsetTop - right1.offsetHeight + 900)) {//右侧文字出场
        right1.style.animation = "right2 1s linear 1";
    }
    if (top > (pc1.offsetTop - pc1.offsetHeight + 1700)) {//新闻中心左侧上方内容出场
        pc1.style.animation = "left1 1s linear 1";
    }
    if (top > (pc2.offsetTop - pc2.offsetHeight + 1700)) {//新闻中心左侧下方内容出场
        pc2.style.animation = "right4 1s linear 1";
    }
    if (top > (right2.offsetTop - right2.offsetHeight + 1900)) {//新闻中心右侧内容出场
        right2.style.animation = "right3 1s linear 1";
    }

    if (top > (li1.offsetTop - li1.offsetHeight + 2200)) {//第一个li出场
        li1.style.animation = "right5 1s linear 1";
    }
    if (top > (li2.offsetTop - li2.offsetHeight + 2200)) {//第二个li出场
        li2.style.animation = "right5 1.2s linear 1";
    }
    if (top > (li3.offsetTop - li3.offsetHeight + 2200)) {//第三个li出场
        li3.style.animation = "right5 1.4s linear 1";
    }
    if (top > (li4.offsetTop - li4.offsetHeight + 2200)) {//第四个li出场
        li4.style.animation = "right5 1.6s linear 1";
    }
    if (top > (li5.offsetTop - li5.offsetHeight + 2200)) {//第五个li出场
        li5.style.animation = "right5 1.8s linear 1";
    }

    if (top > (TOP1.offsetTop - TOP1.offsetHeight + 500)) {//超链接书签出场
        TOP1.style.display = "block";
    }
    else {
        TOP1.style.display = "none";
    }

}
//回到顶部超链接悬停的提示内容
window.onload = function () {
    TOP1.onmousemove = function () {
        SPAN.style.display = "block"
    }
    TOP1.onmouseout = function () {
        SPAN.style.display = "none"
    }
}
/*window.onscroll = function () {
    //检测鼠标滚轮距离顶部位置
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    var hh = document.querySelectorAll(".t1");
    var i;
    for (i = 0; i < hh.length; i++) {
        if (top > (hh.offsetTop - hh.offsetHeight + 700)) {
            console.log(top);
        }
        hh[i].style.animation = "zhankai 1.5s linear 1" //添加动画
        console.log(top);
    }
}*/

	