let deadline = new Date("Nov 11, 2023 00:00:00").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = deadline - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let span = document.querySelectorAll('.banner>.timer>span')
    span[0].innerHTML = days
    span[2].innerHTML = hours
    span[4].innerHTML = minutes
    span[6].innerHTML = seconds
}, 10);

