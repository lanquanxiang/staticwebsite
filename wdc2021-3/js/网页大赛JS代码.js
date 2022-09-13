$(".headMessage_0>li").mouseover(function () {
    $(this).children("ul").show();
})
$(".headMessage_0>li .a").mouseover(function () {
    $(".headMessage_0>li img").css({
        "transform": "rotate(180deg)",
        "transitionDuration": "0.4s"
    })
})

$(".headMessage_0>li").mouseout(function () {
    $(this).children("ul").hide();
    $(".headMessage_0>li img").css({
        "transform": "rotate(0deg)"
    })
})
// var boxTop = $(".headMessage").offset().top;
// $(window).scroll(function () {
//     if ($(document).scrollTop() >= boxTop) {
//         $(".square_6").fadeIn();
//     } else {
//         $(".square_6").fadeOut();
//     }
// })
$(".square").click(function () {
    $("body,html").stop().animate({
        scrollTop: 0
    })
})
$(".square_1").click(function () {
    $("body,html").stop().animate({
        scrollTop: 3719
    })
})
$(".square_2").click(function () {
    $("body,html").stop().animate({
        scrollTop: 3308
    })
})
$(".square_3").click(function () {
    $("body,html").stop().animate({
        scrollTop: 2596
    })
})
$(".square_4").click(function () {
    $("body,html").stop().animate({
        scrollTop: 445
    })
})

$(".a").click(function () {
    $("body,html").stop().animate({
        scrollTop: 445
    })
})
$(".b").click(function () {
    $("body,html").stop().animate({
        scrollTop: 2596
    })
})
$(".c").click(function () {
    $("body,html").stop().animate({
        scrollTop: 3308
    })
})
$(".d").click(function () {
    $("body,html").stop().animate({
        scrollTop: 3719
    })
})
$(".e").click(function () {
    $("body,html").stop().animate({
        scrollTop: 552
    })
})
$(".f").click(function () {
    $("body,html").stop().animate({
        scrollTop: 871
    })
})
$(".g").click(function () {
    $("body,html").stop().animate({
        scrollTop: 1616
    })
})
$(".h").click(function () {
    $("body,html").stop().animate({
        scrollTop: 1932
    })
})
$(function () {
    $(".body4_1_1").mouseover(function () {
        $(this).css("background-color", "#DCDCDC");
    })
    $(".body4_1_1").mouseout(function () {
        $(this).css("background-color", "white");
    })
    $(".tailMessage_1 li a").mouseover(function () {
        $(this).css("color", "#DCDCDC");
    })
    $(".tailMessage_1 li a").mouseout(function () {
        $(this).css("color", "#ffffff");
    })
    $(".headMessage_0 li a").mouseover(function () {
        $(this).css("color", "#DCDCDC");
    })
    $(".headMessage_0 li a").mouseout(function () {
        $(this).css("color", "#ffdcab");
    })
    $(window).scroll(function () {
        if ($(document).scrollTop() >= 0 && $(document).scrollTop() <= 2499) {
            $(".square_4").css("background-color", "#ff0036");
        }
        else {
            $(".square_4").css("background-color", "rgba(0,0,0,.6)");
        }
        if ($(document).scrollTop() >= 2500 && $(document).scrollTop() <= 3199) {
            $(".square_3").css("background-color", "#ff0036");
        }
        else {
            $(".square_3").css("background-color", "rgba(0,0,0,.6)");
        }
        if ($(document).scrollTop() >= 3200 && $(document).scrollTop() <= 3640) {
            $(".square_2").css("background-color", "#ff0036");
        }
        else {
            $(".square_2").css("background-color", "rgba(0,0,0,.6)");
        }
        if ($(document).scrollTop() >= 3641) {
            $(".square_1").css("background-color", "#ff0036");
        }
        else {
            $(".square_1").css("background-color", "rgba(0,0,0,.6)");
        }
    })
})
var index = 0;
$(".body3_2").click(function () {
    if (index == 0) {

    } else {
        $(".body3_1 div").stop().animate({
            left: '+=174.28'
        }, 250)
        index--;
    }
})
$(".body3_3").click(function () {
    if (index == 17) {

    } else {
        $(".body3_1 div").stop().animate({
            left: '-=174.28'
        }, 250)
        index++;
    }
})
$(".body3_1 div img").mouseover(function () {
    $(this).stop().animate({
        width: 130,
        height: 170
    }, 300)
})
$(".body3_1 div img").mouseout(function () {
    $(this).stop().animate({
        width: 120,
        height: 160
    }, 300)
})
var index1 = 0;
$(".body3_4").click(function () {
    if (index1 == 0) {

    } else {
        $(".body1_4_7").stop().animate({
            left: '+=362.5'
        }, 250)
        index1--;
    }
})
$(".body3_5").click(function () {
    if (index1 == 2) {

    } else {
        $(".body1_4_7").stop().animate({
            left: '-=362.5'
        }, 250)
        index1++;
    }
})
var index2 = 0;
$(".body3_6").click(function () {
    if (index2 == 0) {

    } else {
        $(".body2_2_1").stop().animate({
            left: '+=259'
        }, 250)
        index2--;
    }
})
$(".body3_7").click(function () {
    if (index2 == 2) {

    } else {
        $(".body2_2_1").stop().animate({
            left: '-=259'
        }, 250)
        index2++;
    }
})
var la = $(".body2_1 ul li div");
$(la[0]).click(function () {
    $(".la0,.la1").fadeIn();
})
$(la[1]).click(function () {
    $(".la0,.la2").fadeIn();
})
$(la[2]).click(function () {
    $(".la0,.la3").fadeIn();
})
$(la[3]).click(function () {
    $(".la0,.la4").fadeIn();
})
$(la[4]).click(function () {
    $(".la0,.la5").fadeIn();
})
$(la[5]).click(function () {
    $(".la0,.la6").fadeIn();
})
$(la[6]).click(function () {
    $(".la0,.la7").fadeIn();
})
$(la[7]).click(function () {
    $(".la0,.la8").fadeIn();
})
$(".la0").click(function () {
    $(this).fadeOut();
    $(".la1,.la2,.la3,.la4,.la5,.la6,.la7,.la8").fadeOut();
})
var lb = $(".body1_4_1 ul li"); //第一个
var lc = $(".body1_4_2 ul li"); //第二个
var ld = $(".body1_4_8 ul li"); //第三个
var le = $(".body1_4_9 ul li"); //第四个
var lf = $(".body1_4_10 ul li"); //第五个
$(".ls").click(function () {
    $(this).fadeOut();
    $(".a1,.a2,.a3,.a4,.a5,.a6,.a7,.a8,.a9,.a10,.a11,.a12,.a13,.a14,.a15,.a16,.a17,.a18,.a19,.a20,.a21,.a22,.a23,.a24,.a25,.a26,.a27,.a28,.a29,.a30,.a31,.a32,.a33,.a34,.a35,.a36,.a37,.a38,.a39,.a40").fadeOut();
})
$(lb[0]).click(function () {
    $(".ls,.a1").fadeIn();
})
$(lb[1]).click(function () {
    $(".ls,.a2").fadeIn();
})
$(lb[2]).click(function () {
    $(".ls,.a3").fadeIn();
})
$(lb[3]).click(function () {
    $(".ls,.a4").fadeIn();
})
$(lb[4]).click(function () {
    $(".ls,.a5").fadeIn();
})
$(lb[5]).click(function () {
    $(".ls,.a6").fadeIn();
})
$(lb[6]).click(function () {
    $(".ls,.a7").fadeIn();
})
$(lb[7]).click(function () {
    $(".ls,.a8").fadeIn();
})

$(lc[0]).click(function () {
    $(".ls,.a9").fadeIn();
})
$(lc[1]).click(function () {
    $(".ls,.a10").fadeIn();
})
$(lc[2]).click(function () {
    $(".ls,.a11").fadeIn();
})
$(lc[3]).click(function () {
    $(".ls,.a12").fadeIn();
})
$(lc[4]).click(function () {
    $(".ls,.a13").fadeIn();
})
$(lc[5]).click(function () {
    $(".ls,.a14").fadeIn();
})
$(lc[6]).click(function () {
    $(".ls,.a15").fadeIn();
})
$(lc[7]).click(function () {
    $(".ls,.a16").fadeIn();
})

$(ld[0]).click(function () {
    $(".ls,.a17").fadeIn();
})
$(ld[1]).click(function () {
    $(".ls,.a18").fadeIn();
})
$(ld[2]).click(function () {
    $(".ls,.a19").fadeIn();
})
$(ld[3]).click(function () {
    $(".ls,.a20").fadeIn();
})
$(ld[4]).click(function () {
    $(".ls,.a21").fadeIn();
})
$(ld[5]).click(function () {
    $(".ls,.a22").fadeIn();
})
$(ld[6]).click(function () {
    $(".ls,.a23").fadeIn();
})
$(ld[7]).click(function () {
    $(".ls,.a24").fadeIn();
})

$(le[0]).click(function () {
    $(".ls,.a25").fadeIn();
})
$(le[1]).click(function () {
    $(".ls,.a26").fadeIn();
})
$(le[2]).click(function () {
    $(".ls,.a27").fadeIn();
})
$(le[3]).click(function () {
    $(".ls,.a28").fadeIn();
})
$(le[4]).click(function () {
    $(".ls,.a29").fadeIn();
})
$(le[5]).click(function () {
    $(".ls,.a30").fadeIn();
})
$(le[6]).click(function () {
    $(".ls,.a31").fadeIn();
})
$(le[7]).click(function () {
    $(".ls,.a32").fadeIn();
})

$(lf[0]).click(function () {
    $(".ls,.a33").fadeIn();
})
$(lf[1]).click(function () {
    $(".ls,.a34").fadeIn();
})
$(lf[2]).click(function () {
    $(".ls,.a35").fadeIn();
})
$(lf[3]).click(function () {
    $(".ls,.a36").fadeIn();
})
$(lf[4]).click(function () {
    $(".ls,.a37").fadeIn();
})
$(lf[5]).click(function () {
    $(".ls,.a38").fadeIn();
})
$(lf[6]).click(function () {
    $(".ls,.a39").fadeIn();
})
$(lf[7]).click(function () {
    $(".ls,.a40").fadeIn();
})

$(".body1_4_1 ul li a").mouseover(function () {
    $(this).css("color", "red");
})
$(".body1_4_1 ul li a").mouseout(function () {
    $(this).css("color", "black");
})
$(".body1_4_2 ul li a").mouseover(function () {
    $(this).css("color", "red");
})
$(".body1_4_2 ul li a").mouseout(function () {
    $(this).css("color", "black");
})
$(".body1_4_6 ul li a").mouseover(function () {
    $(this).css("color", "red");
})
$(".body1_4_6 ul li a").mouseout(function () {
    $(this).css("color", "black");
})
$(".body2_1 ul li div").mouseover(function () {
    $(this).stop().animate({
        fontSize: 30
    }, 200)

})
$(".body2_1 ul li div").mouseout(function () {
    $(this).stop().animate({
        fontSize: 23
    }, 200)
})
var lc = $(".body3_1 div");
$(lc[0]).click(function () {
    $(".lc0,.c1").fadeIn();
})
$(lc[1]).click(function () {
    $(".lc0,.c2").fadeIn();
})
$(lc[2]).click(function () {
    $(".lc0,.c3").fadeIn();
})
$(lc[3]).click(function () {
    $(".lc0,.c4").fadeIn();
})
$(lc[4]).click(function () {
    $(".lc0,.c5").fadeIn();
})
$(lc[5]).click(function () {
    $(".lc0,.c6").fadeIn();
})
$(lc[6]).click(function () {
    $(".lc0,.c7").fadeIn();
})
$(lc[7]).click(function () {
    $(".lc0,.c8").fadeIn();
})
$(lc[8]).click(function () {
    $(".lc0,.c9").fadeIn();
})
$(lc[9]).click(function () {
    $(".lc0,.c10").fadeIn();
})
$(lc[10]).click(function () {
    $(".lc0,.c11").fadeIn();
})
$(lc[11]).click(function () {
    $(".lc0,.c12").fadeIn();
})
$(lc[12]).click(function () {
    $(".lc0,.c13").fadeIn();
})
$(lc[13]).click(function () {
    $(".lc0,.c14").fadeIn();
})
$(lc[14]).click(function () {
    $(".lc0,.c15").fadeIn();
})
$(lc[15]).click(function () {
    $(".lc0,.c16").fadeIn();
})
$(lc[16]).click(function () {
    $(".lc0,.c17").fadeIn();
})
$(lc[17]).click(function () {
    $(".lc0,.c18").fadeIn();
})
$(lc[18]).click(function () {
    $(".lc0,.c19").fadeIn();
})
$(lc[19]).click(function () {
    $(".lc0,.c20").fadeIn();
})
$(lc[20]).click(function () {
    $(".lc0,.c21").fadeIn();
})
$(lc[21]).click(function () {
    $(".lc0,.c22").fadeIn();
})
$(lc[22]).click(function () {
    $(".lc0,.c23").fadeIn();
})
$(".lc0").click(function () {
    $(this).fadeOut();
    $(".c1,.c2,.c3,.c4,.c5,.c6,.c7,.c8,.c9,.c10,.c11,.c12,.c13,.c14,.c15,.c16,.c17,.c18,.c19,.c20,.c21,.c22,.c23").fadeOut();
})
