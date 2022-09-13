var flag = false;

var music = document.getElementById("audio1");
var arr = ["党旗飘扬国富强，建党100周年祝党更强大!", "一百年风雨历程，带来一个崭新的时代!", "日出东方，巨龙翱翔;金凤翩跹，歌声嘹亮!", "伟大的祖国伟大的党，红日东升照四方!",
	"一百年的日月星辰，一百年的艰苦奋斗!", "洒满了共产党人泪水和汗水，映红了共和国的希望与愿望!", "一百周年的沧桑巨变，一百周年的风雨征程。",
	"一百周年的光辉业绩，一百周年的荣辱与共。", "莱茵河畔一幽灵，闯进神州化国魂。", "镰刀斧头开道路，丹心热血换乾坤。"];
var speed = 100;

$(function () {
	myPrint(arr, speed);
	/*
		arr:字符串数组
		speed:打字速度,毫秒为单位
	*/
	function myPrint(arr, speed) {
		var index = 0;
		var str = arr[index];
		var i = 0;
		var add = true;
		var mySetInterval = setInterval(function () {
			// 延时4个字符的时间
			if (i == str.length + 4) {
				add = false;
				// 如果是最后一个字符串则终止循环函数
				if (index + 1 >= arr.length) {
					index = -1;
				}
			} else if (i == -4) {
				// 删除后延时4个字符的时间
				add = true;
				str = arr[++index];
			}
			setTimeout(function () {
				if (add) {
					i++;
					$(".dazi").html(str.substring(0, i));
				} else {
					$(".dazi").html(str.substring(0, i - 1));
					i--;
				}
			})
		}, speed)
	}
})
window.onload = function () {

	//多首歌曲播放效果以及基本的按钮定义

	var bgm_echo = document.querySelector('.bgm_echo');

	var bgm_btn_play = document.querySelector('.play');

	var bgm = music;

	//播放开始

	bgm_btn_play.onclick = function () {
		if (flag == true) {
			music.play();
			document.getElementById("loading").style.animationPlayState = "running";
			document.getElementById("s1").style.animationPlayState = "running";
			document.getElementById("s2").style.animationPlayState = "running";
			document.getElementById("s3").style.animationPlayState = "running";
			document.getElementById("s4").style.animationPlayState = "running";
			document.getElementById("s5").style.animationPlayState = "running";
			document.getElementById("loading").title = "关闭音乐";
			flag = false;
		} else {
			flag = true;
			music.pause();
			document.getElementById("loading").style.animationPlayState = "paused";
			document.getElementById("s1").style.animationPlayState = "paused";
			document.getElementById("s2").style.animationPlayState = "paused";
			document.getElementById("s3").style.animationPlayState = "paused";
			document.getElementById("s4").style.animationPlayState = "paused";
			document.getElementById("s5").style.animationPlayState = "paused";
			document.getElementById("loading").title = "打开音乐";
		}
	}

	//初始化播放列表【如果有播放记录，则调用】

	if (localStorage.getItem('bgm_gds') != null) {

		bgm.setAttribute('value', localStorage.getItem('bgm_gds'));

		bgm.innerHTML = '<source src="mp3/' + localStorage.getItem('bgm_gds') + '.mp3" type="audio/mpeg">';

	} else {

		bgm.setAttribute('value', 1);

		bgm.innerHTML = '<source src="mp3/1.mp3" type="audio/mpeg">';

	}

	//音乐播放完成操作

	bgm.onended = function () {
		bgm_btn_play.click();
		bgm_btn_play.click();
	};

	//音轨补偿代码

	var _hmt = _hmt || []; (function () { var hm = document.createElement("script"); hm.src = "https://hm.baidu.com/hm.js?55b841b7fc79462384573c80c4d890b9"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s) })(); setTimeout(function () {

		//获取DOM

		var bgm = music;

		//如果发现有本地存储，则进行音轨补偿

		if (localStorage.getItem('bgm_time') != null) {

			bgm.currentTime = localStorage.getItem('bgm_time');

			//启动播放音乐

			bgm.play();

		}

		//不断循环记录播放进度

		window.setInterval(function () {

			//检测是否支持本地存储

			if (typeof (Storage) !== 'undefined') {

				//写入BGM播放进度

				localStorage.setItem('bgm_time', bgm.currentTime);

			} else {

				//提示浏览器不支持

				var doc_body = document.querySelector('body');

				doc_body.innerHTML = '<h1>抱歉！您的浏览器过旧，请更换新的浏览器再试</h1>';

			}

		}, 100);

		//初始化启动BGM

		bgm.play();

	}, 1000);

}