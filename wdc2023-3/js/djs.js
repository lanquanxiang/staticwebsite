const year = new Date().getFullYear();
const fourthOfJuly = new Date(year, 6, 4).getTime();
const fourthOfJulyNextYear = new Date(year + 1, 6, 4).getTime();
const month = new Date().getMonth();
const endDate = '11/11/2023 00:00:00';
// countdown
let timer = setInterval(function() {

	// get today's date
	const today = new Date().getTime();
	var timestr = new Date(parseInt(today));
	// get the difference
	let diff;
	if (month > 6) {
		diff = fourthOfJulyNextYear - today;
	} else {
		diff = fourthOfJuly - today;
	}

	const now = new Date(endDate).getTime();
	const countDown = new Date().getTime();


	let days, hours, minutes, seconds, distance;

	function display(distance) {
		days = Math.floor(distance / (1000 * 60 * 60 * 24));
		hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((distance % (1000 * 60)) / (1000));
		if (hours < 10) {
			hours = '0' + hours
		}
		if (minutes < 10) {
			minutes = '0' + minutes
		}
		if (seconds < 10) {
			seconds = '0' + seconds
		}
	}
	if (timestr.getFullYear() - endDate.slice(6, 10) - 0 > 0) {
		display(countDown - now)
		document.getElementById("haha").innerHTML = "距攀大四十周年<span >已过去<i id='underline'>.<br>.<br>.</i></span>"
	} else {
		display(now - countDown)
	}
	const line = document.getElementById("underline")
	line.style.color = "red"
	line.style.opacity = 1
	setInterval(() => {
		if (line.style.opacity <= 0) {
			line.style.opacity = 1
			return;
		}
		line.style.opacity -= 1
	}, 500)

	// display
	document.getElementById("timer").innerHTML =
		"<div class=\"days\"> \
    <div class=\"numbers\">" + days + "</div>days</div> \
  <div class=\"hours\"> \
    <div class=\"numbers\">" + hours + "</div>hours</div> \
  <div class=\"minutes\"> \
    <div class=\"numbers\">" + minutes + "</div>minutes</div> \
  <div class=\"seconds\"> \
    <div class=\"numbers\">" + seconds + "</div>seconds</div> \
  </div>";

}, 1000);