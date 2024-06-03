    //1、获取元素 按钮 p img
    var img = document.getElementsByTagName('img')[0];
    var btns = document.getElementsByTagName('button');
    var ps = document.getElementsByTagName('p');
    console.log(btns, img, ps);
    //4、不知道照片处于第几张 假设一个变量存初始值
    var n = 1;
    //2、添加事件 加给按钮 btns
    btns[0].onclick = function () {
    //3、写具体代码操作
    n++;
    console.log(n);
    if (n == 13) {
    n = 1
}
    //5、图片切换到下一张
    img.src = 'img/' + n + '.jpg'
    //获取p标签内容
    //设置p标签内容里面的数字
    ps[0].innerHTML = n + '12';
    ps[1].innerHTML = '' + n;

}
    btns[1].onclick = function () {
    //3、写具体代码操作  图片切换到下一张
    n--;
    console.log(n);
    if (n == 0) {
    n = 12
}
    //5、切换图片
    img.src = 'img/' + n + '.jpg'
    //获取p标签内容
    //设置p标签内容里面的数字
    ps[0].innerHTML = '' + n + '/16';
    ps[1].innerHTML = '' + n;
}
