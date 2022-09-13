text = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];
// 计数
var count = 0;
var $html = document.getElementsByTagName("html")[0];
var $body = document.getElementsByTagName("body")[0];
// 鼠标按下事件
$html.onmousedown = function(e) {
	// 获取鼠标点击位置
	var x = event.pageX - 18;
	var y = event.pageY - 30;
	// 分别创建所需要的元素节点
	var img = document.createElement("div");
	var left = document.createElement("div");
	var right = document.createElement("div");
	var under = document.createElement("div");
	var txt = document.createElement("div");
	// 通过随机数从文字数组中获取随机下标的文字
	var textNode = document.createTextNode(text[count % 12]);
	// 文字添加到txt节点中
	txt.appendChild(textNode);
	img.className = "img" + " " + "img" + count;
	left.className = "left";
	right.className = "right";
	under.className = "under";
	txt.className = "text";
	img.style.top = y + "px";
	img.style.left = x + "px";
	// 将创建的元素添加到容器中
	img.appendChild(left);
	img.appendChild(right);
	img.appendChild(under);
	img.appendChild(txt);
	$html.appendChild(img);
	// 获取随机颜色
	var color = "rgb(" + 255 + "," + parseInt(Math.random() * 100) + "," +
		parseInt(Math.random() * 255) + ")";
	txt.style.color = color;
	for (var i = 0; i < 3; i++) {
		img.children[i].style.background = color;
	}
}
// 鼠标抬起事件
$html.onmouseup = function() {
	document.getElementsByClassName("img" + count)[0].style.transform = "scale(0.5)";
	document.getElementsByClassName("img" + count)[0].style.transform = "translateY(-40px)";
	document.getElementsByClassName("img" + count)[0].style.opacity = "0";
	count++;
}
