
const line = document.getElementById("underline")
line.style.color = "red"
setInterval(() => {
	if (line.style.opacity <= 0) {
		line.style.opacity = 1
		return;
	}
	line.style.opacity -= 1
}, 500)


// 页面跳转
// let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

// const tragetElemPostition = document.querySelector("#test").offsetTop;
// console.log(scrollTop,tragetElemPostition);

