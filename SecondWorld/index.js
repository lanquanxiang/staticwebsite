var str = "#default";

function fun() {
    switch (this.id) {
        case "0":
            if (str == "#default") {
                return;
            }
            $(".welcome").css("opacity", "1");
            $(str).slideUp(1000);
            $("#default").slideDown(1000);
            str = "#default";
            break;

        case "1":
            if (str == "#article") {
                return;
            }
            // $(".welcome").css("opacity", "0");
            $("#bg").attr("src", "audio/article_bg.mp3");
            $(str).slideUp(1000);
            $("#article").slideDown(1000);
            $(".con").fadeIn(1500);
            str = "#article"
            break;

        case "2":
            if (str == "#musics") {
                return;
            }
            // $(".welcome").css("opacity", "0");
            $("#bg").attr("src", "audio/music_bg.mp3");
            $(str).slideUp(1000);
            $("#musics").slideDown(1000);
            str = "#musics";
            break;

        case "3":
            if (str == "#food") {
                return;
            }
            // $(".welcome").css("opacity", "0");
            $("#bg").attr("src", "audio/food_bg.mp3");
            $(str).slideUp(1000);
            $("#food").slideDown(1000);
            str = "#food";
            break;

        case "4":
            if (str == "#contact") {
                return;
            }
            // $(".welcome").css("opacity", "0");
            // $("#bg").attr("src", "audio/food_bg.mp3");
            $(str).slideUp(1000);
            $("#contact").slideDown(1000);
            str = "#contact";
            break;
    }
}

function baidu_music() {
    var con = document.getElementById("music_text").value;
    window.location.href = "http://music.baidu.com/search?key=" + con;
}


/* food */
function delicious_food() {
    var food = document.getElementById("food_text").value;
    window.location.href = "http://home.meishichina.com/search/" + food + "/";
}

function m_click() {
    window.location.href = "https://www.baidu.com/s?wd=" + this.innerHTML + "&ie=utf-8&tn=baiduhome_pg";
}

function m_over() {
    if (this.innerHTML == "川菜") {
        $(".chuan").slideDown(500);
    } else if (this.innerHTML == "鲁菜") {
        $(".lu").slideDown(500);
    } else if (this.innerHTML == "粤菜") {
        $(".yue").slideDown(500);
    } else {
        $(".su").slideDown(500);
    }
}

function m_over_cai() {

}

function m_out() {
    $(".chuan,.lu,.yue,.su").slideUp(500);
}

var count = 0;
var T;
var arry1 = ["img/hcy/1.jpg", "img/hcy/3.jpg", "img/hcy/4.jpg", "img/hcy/5.jpg", "img/hcy/7.jpg"];
var arry2 = ["img/hcy/10.jpg", "img/hcy/6.jpg", "img/hcy/8.jpg", "img/hcy/5.jpg", "img/hcy/10.jpg"];
var arry3 = ["img/hcy/9.jpg", "img/hcy/10.jpg", "img/hcy/11.jpg", "img/hcy/20.jpg", "img/hcy/1.jpg"];
var arry4 = ["img/hcy/13.jpg", "img/hcy/14.jpg", "img/hcy/15.jpg", "img/hcy/6.jpg", "img/hcy/22.jpg"];
var arry5 = ["img/hcy/16.jpg", "img/hcy/17.jpg", "img/hcy/18.jpg", "img/hcy/4.jpg", "img/hcy/29.jpg"];
var arry6 = ["img/hcy/19.jpg", "img/hcy/20.jpg", "img/hcy/21.jpg", "img/hcy/2.jpg", "img/hcy/33.jpg"];
var arry7 = ["img/hcy/22.jpg", "img/hcy/23.jpg", "img/hcy/24.jpg", "img/hcy/3.jpg", "img/hcy/30.jpg"];
var arry8 = ["img/hcy/25.jpg", "img/hcy/26.jpg", "img/hcy/27.jpg", "img/hcy/10.jpg", "img/hcy/15.jpg"];
var arry9 = ["img/hcy/28.jpg", "img/hcy/29.jpg", "img/hcy/30.jpg", "img/hcy/11.jpg", "img/hcy/12.jpg"];
var arry10 = ["img/hcy/31.jpg", "img/hcy/32.jpg", "img/hcy/33.jpg", "img/hcy/26.jpg", "img/hcy/22.jpg"];

function origin() {
    /* clearTimeout(T); */
    var iamge = document.getElementById("image");
    $("#image").fadeIn(1000);
    image.src = arry1[count++];
    $("#image").fadeOut(1000);
    if (count == arry1.length) {
        count = 0;
    }
    T = setTimeout(origin, 2000);
}
//播放音乐
function fun1() {
    document.getElementById("bg").setAttribute("src", "audio/" + this.id + ".mp3");
}

//跳转到百度音乐
function baidu_music() {
    var con = document.getElementById("music_text").value;
    window.location.href = "http://music.baidu.com/search?key=" + con;
}

//XML部分（弹幕）
var xmlhttprequest;

function creatXMLHttpRequest() {
    if (window.XMLHttpRequest) { //现代浏览器
        xmlhttprequest = new XMLHttpRequest();
    } else {//（IE5 IE6浏览器）
        xmlhttprequest = new ActiveXObject(Micosoft.XMLHttpRequest);
    }
    return xmlhttprequest;
}

function dm() {
    var id = this.id;
    var xhr = creatXMLHttpRequest();
    //创建请求
    xhr.open("get", "info.xml", true);
    //发送请求
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var xmldata = xhr.responseXML;
            var singer = xmldata.getElementsByTagName("singer");
            switch (id) {
                case "xun":
                    document.getElementById("ma2").innerHTML = singer[0].getElementsByTagName("song")[0].getElementsByTagName("name")[0].innerHTML;
                    document.getElementById("ma3").innerHTML = singer[0].getElementsByTagName("song")[0].getElementsByTagName("time")[0].innerHTML;
                    document.getElementById("ma4").innerHTML = singer[0].getElementsByTagName("song")[0].getElementsByTagName("album")[0].innerHTML;
                    document.getElementById("ma5").innerHTML = singer[0].getElementsByTagName("song")[0].getElementsByTagName("lir")[0].innerHTML;
                    break;
                case "pfzl":
                    document.getElementById("ma2").innerHTML = singer[0].getElementsByTagName("song")[1].getElementsByTagName("name")[0].innerHTML;
                    document.getElementById("ma3").innerHTML = singer[0].getElementsByTagName("song")[1].getElementsByTagName("time")[0].innerHTML;
                    document.getElementById("ma4").innerHTML = singer[0].getElementsByTagName("song")[1].getElementsByTagName("album")[0].innerHTML;
                    document.getElementById("ma5").innerHTML = singer[0].getElementsByTagName("song")[1].getElementsByTagName("lir")[0].innerHTML;
                    break;
                case "sh":
                    document.getElementById("ma2").innerHTML = singer[0].getElementsByTagName("song")[2].getElementsByTagName("name")[0].innerHTML;
                    document.getElementById("ma3").innerHTML = singer[0].getElementsByTagName("song")[2].getElementsByTagName("time")[0].innerHTML;
                    document.getElementById("ma4").innerHTML = singer[0].getElementsByTagName("song")[2].getElementsByTagName("album")[0].innerHTML;
                    document.getElementById("ma5").innerHTML = singer[0].getElementsByTagName("song")[2].getElementsByTagName("lir")[0].innerHTML;
                    break;
                case "qt":
                    document.getElementById("ma2").innerHTML = singer[0].getElementsByTagName("song")[3].getElementsByTagName("name")[0].innerHTML;
                    document.getElementById("ma3").innerHTML = singer[0].getElementsByTagName("song")[3].getElementsByTagName("time")[0].innerHTML;
                    document.getElementById("ma4").innerHTML = singer[0].getElementsByTagName("song")[3].getElementsByTagName("album")[0].innerHTML;
                    document.getElementById("ma5").innerHTML = singer[0].getElementsByTagName("song")[3].getElementsByTagName("lir")[0].innerHTML;
                    break;
                case "sjg":
                    document.getElementById("ma2").innerHTML = singer[0].getElementsByTagName("song")[4].getElementsByTagName("name")[0].innerHTML;
                    document.getElementById("ma3").innerHTML = singer[0].getElementsByTagName("song")[4].getElementsByTagName("time")[0].innerHTML;
                    document.getElementById("ma4").innerHTML = singer[0].getElementsByTagName("song")[4].getElementsByTagName("album")[0].innerHTML;
                    document.getElementById("ma5").innerHTML = singer[0].getElementsByTagName("song")[4].getElementsByTagName("lir")[0].innerHTML;
                    break;
                case "zs":
                    document.getElementById("ma2").innerHTML = singer[0].getElementsByTagName("song")[5].getElementsByTagName("name")[0].innerHTML;
                    document.getElementById("ma3").innerHTML = singer[0].getElementsByTagName("song")[5].getElementsByTagName("time")[0].innerHTML;
                    document.getElementById("ma4").innerHTML = singer[0].getElementsByTagName("song")[5].getElementsByTagName("album")[0].innerHTML;
                    document.getElementById("ma5").innerHTML = singer[0].getElementsByTagName("song")[5].getElementsByTagName("lir")[0].innerHTML;
                    break;
                case "hz":
                    document.getElementById("ma2").innerHTML = singer[0].getElementsByTagName("song")[6].getElementsByTagName("name")[0].innerHTML;
                    document.getElementById("ma3").innerHTML = singer[0].getElementsByTagName("song")[6].getElementsByTagName("time")[0].innerHTML;
                    document.getElementById("ma4").innerHTML = singer[0].getElementsByTagName("song")[6].getElementsByTagName("album")[0].innerHTML;
                    document.getElementById("ma5").innerHTML = singer[0].getElementsByTagName("song")[6].getElementsByTagName("lir")[0].innerHTML;
                    break;
                case "yr":
                    document.getElementById("ma2").innerHTML = singer[0].getElementsByTagName("song")[7].getElementsByTagName("name")[0].innerHTML;
                    document.getElementById("ma3").innerHTML = singer[0].getElementsByTagName("song")[7].getElementsByTagName("time")[0].innerHTML;
                    document.getElementById("ma4").innerHTML = singer[0].getElementsByTagName("song")[7].getElementsByTagName("album")[0].innerHTML;
                    document.getElementById("ma5").innerHTML = singer[0].getElementsByTagName("song")[7].getElementsByTagName("lir")[0].innerHTML;
                    break;
                case "c":
                    document.getElementById("ma2").innerHTML = singer[0].getElementsByTagName("song")[8].getElementsByTagName("name")[0].innerHTML;
                    document.getElementById("ma3").innerHTML = singer[0].getElementsByTagName("song")[8].getElementsByTagName("time")[0].innerHTML;
                    document.getElementById("ma4").innerHTML = singer[0].getElementsByTagName("song")[8].getElementsByTagName("album")[0].innerHTML;
                    document.getElementById("ma5").innerHTML = singer[0].getElementsByTagName("song")[8].getElementsByTagName("lir")[0].innerHTML;
                    break;
            }
        }
    }

}

var str = "";
function show_contact(){

    switch(this.id){
        case "contact_qq":
            $(str).fadeOut(500);
            $(".qq").fadeIn(500);
            str=".qq";
            break;

        case "wechat":
            $(str).fadeOut(500);
            $(".wechat").fadeIn(500);
            str=".wechat";
            break;

        case "tel":
            $(str).fadeOut(500);
            $(".tel").fadeIn(500);
            str=".tel";
            break;
    }
}

