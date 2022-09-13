$(document).ready(function() {

    var swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
            invert: false,
        },

        pagination: {
            el: '.blog-slider_pagination',
            clickable: true,
        }
    });


    // /*p1Con*/
    // var swiperP1 = new Swiper('.swiper-container-p1', {
    //     mode: 'horizontal',
    //     autoplay: 5000,
    //     autoplayDisableOnInteraction: false,
    //     loop: true,
    //     slidesPerView: 1,
    //     pagination: '.swiper-pagination1',
    //     paginationClickable: true,
    //     mousewheelControl: false,
    //     onSlideChangeStart: function(swiper){
    //         $(".num1 .thisp").html(swiperP1.activeLoopIndex+1);
    //     }
    // });
    // var allNump1 = $(".swiper-pagination1").find(".swiper-pagination-switch").length;
    // $(".num1 .thisp").html(1);
    // $(".num1 .allp").html(allNump1);
    // $(".swiper-container-p1").mouseenter(function () {
    //     swiperP1.stopAutoplay();
    // }).mouseleave(function () {
    //     swiperP1.startAutoplay();
    // });
    // $(".prev1").click(function(){
    //     swiperP1.swipePrev();
    // });
    // $(".next1").click(function(){
    //     swiperP1.swipeNext();
    // });

	// //var $itemContent1 = $('.p3con .fr div')
	// //var $tab1 = $('.p3con .fl div')
	// var $tab2 = $('.p3con1 .fl span')
	// //$itemContent1.eq(0).show();

	// /*$tab1.mouseenter(function () {
	//   var index = $(this).index();
	//   $tab1.find("span").removeClass('active')
	//   $(this).find("span").addClass('active');
	//   $itemContent1.eq(index).fadeIn(400).siblings().hide()
	// })*/
	// var swiperP3 = new Swiper('.swiper-container-p3',{
 //        //pagination: '.swiper-pagination3',
 //        //paginationClickable: true,
 //        //autoplay:5000,
 //        //autoplayDisableOnInteraction: false,
 //        loop: true,
 //        slidesPerView: 1,
 //        mousewheelControl: false,
 //    })
	// $(".prev3").click(function(){
 //        swiperP3.swipePrev();
 //    });
 //    $(".next3").click(function(){
 //        swiperP3.swipeNext();
 //    });
	// $tab2.mouseenter(function () {
	//   var index = $(this).index()
	//   $(this).addClass('active').siblings().removeClass('active')
	//   //$itemContent2.eq(index).fadeIn(400).siblings().hide()
	// })

 //    var swiperP2 = new Swiper('.swiper-container-p2',{
 //        pagination: '.swiper-pagination2',
 //        paginationClickable: true,
 //        autoplay: 5000,
 //        autoplayDisableOnInteraction: false,
 //        loop: true,
 //        slidesPerView: 1,
 //        mousewheelControl: false,
 //    })
	// var $itemContent2 = $('.p5con .item-content');
	// var $tab3 = $('.p5con .list-nav1 li');
	// $itemContent2.eq(0).show();
 //    $tab3.mouseenter(function () {
	//   var index = $(this).index();
	//   $(this).addClass('active').siblings().removeClass('active');
	//   $itemContent2.eq(index).fadeIn(400).siblings().hide();
	// })
	// var $tab4=$(".p2con .fr .pic4");
	// $tab4.eq(0).show();
	// var swiperP4 = new Swiper('.swiper-container-p4',{
	// 	mode : 'vertical',
 //        //autoplay: 5000,
 //        //autoplayDisableOnInteraction: false,
 //        //loop:false,
 //        slidesPerView: 1,
 //        mousewheelControl: false,
	// 	onSlideChangeStart: function(swiper){
	// 		$tab4.hide()
 //            $tab4.eq(swiperP4.activeLoopIndex).fadeIn(400);
 //        }
 //    })
	// $(".prev4").click(function(){
 //        swiperP4.swipePrev();
 //    });
 //    $(".next4").click(function(){
 //        swiperP4.swipeNext();
 //    });
	// var swiperP5 = new Swiper('.swiper-container-p5',{
 //        autoplay: 5000,
 //        autoplayDisableOnInteraction: false,
 //        loop:true,
 //        slidesPerView:3,
 //        mousewheelControl:false,
 //    })
	// $(".prev5").click(function(){
 //        swiperP5.swipePrev();
 //    });
 //    $(".next5").click(function(){
 //        swiperP5.swipeNext();
 //    });
 //   var swiperP7 = new Swiper('.swiper-container7',{
 //        autoplay: 5000,
 //        autoplayDisableOnInteraction: false,
 //        loop: true,
 //        slidesPerView: 1,
 //        mousewheelControl: false,
 //   })
 //   $(".arrow-left7").click(function(){
 //      swiperP7.swipePrev();
 //   });
 //   $(".arrow-right7").click(function(){
 //      swiperP7.swipeNext();
 //   });

	$(".nav em a").each(function(index, element) {
		$(this).click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			$('html,body').animate({scrollTop:$(this.hash).offset().top-10},1000);
		})
	});

});
