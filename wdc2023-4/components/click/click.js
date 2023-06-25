const words = ['明德', '励志', '博学', '笃行'];
const colors = ['#ff0000', '#ff5e00', '#ffea00', '#00ffea', '#ff00c8', '#b200ff'];

document.addEventListener('click', function (e) {
    const word = words[Math.floor(Math.random() * words.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const div = document.createElement('div');
    div.innerText = word;
    div.style.color = color;
    div.style.fontSize = '25px'
    div.style.left = e.pageX + 'px';
    div.style.top = e.pageY + 'px';
    div.style.zIndex = 999999
    div.style.position = 'absolute'
    div.style.animation = 'flowToTop 1s'
    document.body.appendChild(div);
    // console.log(div);
    setTimeout(function () {
        div.style.display = 'none';
        div.style.transform = 'translate(-50%, -50%) scale(2)';
        div.style.color = 'transparent';
        div.style.pointerEvents = 'auto';
        div.style.userSelect = 'none';
        document.body.removeChild(div);
    }, 500);
});
