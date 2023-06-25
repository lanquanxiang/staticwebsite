let startY, currentY, dragging = false;
const dragElement = document.getElementById("drag-element");
const line = document.getElementById('drag-line')
const audio = new Audio('http://76cos.zuziy.cn/%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%99%B4%E5%A4%A9.mp3');
let flag = 1
function startDrag(event) {
    event.preventDefault();
    startY = event.clientY;
    dragging = true;
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", endDrag);
}

function drag(event) {
    if (dragging) {
        currentY = event.clientY;
        const deltaY = currentY - startY;
        dragElement.style.top = Math.max(deltaY, 0) + "px";
        line.classList.add('show-line')
        line.setAttribute('style', `height:${deltaY}px`)
    }
}

function endDrag(event) {
    if (dragging) {
        dragging = false;
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", endDrag);
        line.classList.remove('show-line')
        if (parseInt(dragElement.style.top) > 50) {
            if (flag) {
                
                audio.play();
                flag = 0
            } else {
                audio.pause();
                flag = 1
            }
        }
        dragElement.style.top = 0;
    }
}