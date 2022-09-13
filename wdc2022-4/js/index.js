$(function () {
  var index = 0; //标记当前图片索引
  var f;
  dingshi();
  function dingshi() {
    f = setInterval(function () {
      if (index == $(".roimg").length - 1) {
        index = 0;
        $(".roimg").css("opacity", "0");
        $(".roimg").eq(index).css("opacity", "1");
        $(".number1").text(index + 1);
      } else {
        index++;
        $(".number1").text(index + 1);
        $(".roimg").css("opacity", "0");
        $(".roimg").eq(index).css("opacity", "1");
      }
    }, 3000);
  }
  $(".box-left").click(function () {
    clearInterval(f);
    if (index == 0) {
      $(".roimg").css("opacity", "0");
      $(".roimg").eq(index).css("opacity", "1");
      dingshi();
    } else {
      index--;
      $(".number1").text(index + 1);
      $(".roimg").css("opacity", "0");
      $(".roimg").eq(index).css("opacity", "1");
      dingshi();
    }
  });
  $(".box-right").click(function () {
    clearInterval(f);
    if (index == $(".roimg").length - 1) {
      index = 0;
      $(".roimg").css("opacity", "0");
      $(".roimg").eq(index).css("opacity", "1");
      dingshi();
    } else {
      index++;
      $(".number1").text(index + 1);
      $(".roimg").css("opacity", "0");
      $(".roimg").eq(index).css("opacity", "1");
      dingshi();
    }
  });
  $(".box-botton").click(function () {
    clearInterval(f);
    var indexx = $(this).index();
    index = indexx;
    $(".roimg").css("opacity", "0");
    $(".roimg").eq(index).css("opacity", "1");
    $(".box-botton").eq(index).css(" background-color", "#37c27c");
    dingshi();
  });
  //青春攀大
  var m;
  var index2 = 0;
  dingshi2();
  function dingshi2() {
    m = setInterval(function () {
      if (index2 == $(".roimg2").length - 1) {
        index2 = 0;
        $(".roimg2").css("opacity", "0");
        $(".roimg2").eq(index2).css("opacity", "1");
      } else {
        index2++;
        $(".number1").text(index2 + 1);
        $(".roimg2").css("opacity", "0");
        $(".roimg2").eq(index2).css("opacity", "1");
      }
    }, 4000);
  }
  $(".box-left2").click(function () {
    clearInterval(m);
    if (index2 == 0) {
      $(".roimg2").css("opacity", "0");
      $(".roimg2").eq(index2).css("opacity", "1");
      dingshi2();
    } else {
      index2--;
      $(".roimg2").css("opacity", "0");
      $(".roimg2").eq(index2).css("opacity", "1");
      dingshi2();
    }
  });
  $(".box-right2").click(function () {
    clearInterval(m);
    if (index2 == $(".roimg2").length - 1) {
      index2 = 0;
      $(".roimg2").css("opacity", "0");
      $(".roimg2").eq(index2).css("opacity", "1");
      dingshi2();
    } else {
      index2++;
      $(".roimg2").css("opacity", "0");
      $(".roimg2").eq(index2).css("opacity", "1");
      dingshi2();
    }
  });
  $(".box-botton").click(function () {
    clearInterval(f);
    var indexx = $(this).index();
    index = indexx;
    $(".roimg").css("opacity", "0");
    $(".roimg").eq(index).css("opacity", "1");
    $(".box-botton").eq(index).css(" background-color", "#37c27c");
    dingshi();
  });
  // 团史
  $(".showText")
    .eq(0)
    .mouseover(function () {
      $(".showText").css({
        "background-image": "url(image/left.png)",
      });
      $(".showText").eq(0).css({
        "background-image": "url(image/red.png)",
      });
      $(".showDisplay").css({
        display: "none",
      });
      $(".showDisplay").eq(0).css({
        display: "block",
      });
    });
  $(".showText")
    .eq(1)
    .mouseover(function () {
      $(".showText").css({
        "background-image": "url(image/left.png)",
      });
      $(".showText").eq(1).css({
        "background-image": "url(image/red.png)",
      });
      $(".showDisplay").css({
        display: "none",
      });
      $(".showDisplay").eq(1).css({
        display: "block",
      });
    });
  $(".showText")
    .eq(2)
    .mouseover(function () {
      $(".showText").css({
        "background-image": "url(image/left.png)",
      });
      $(".showText").eq(2).css({
        "background-image": "url(image/red.png)",
      });
      $(".showDisplay").css({
        display: "none",
      });
      $(".showDisplay").eq(2).css({
        display: "block",
      });
    });
});
