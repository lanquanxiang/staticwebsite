let frameTimes = [];
function refreshRate() {
    let now = performance.now();
    while (frameTimes.length > 0 && frameTimes[0] <= now - 1000) {
        frameTimes.shift();
    }
    frameTimes.push(now);
    let fps = frameTimes.length;
    //   console.log('Current refresh rate:', fps);
    document.getElementById('fps').innerHTML = 'FPS:' + fps
    window.requestAnimationFrame(refreshRate);
}
window.requestAnimationFrame(refreshRate);