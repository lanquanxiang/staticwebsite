const canvas = document.getElementById('wave-canvas');
const ctx = canvas.getContext('2d');

const wave = {
    y: canvas.height / 2,
    length: 0.01,
    amplitude: 100,
    frequency: 0.02
};

function drawWave(offset) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);

    for (let i = 0; i <= canvas.width; i += 10) {
        const x = i;
        const y = wave.y + Math.sin(i * wave.length + offset) * wave.amplitude * Math.sin(offset * wave.frequency);
        ctx.lineTo(x, y);
    }

    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();

    ctx.fillStyle = '#ff0000'; 
    ctx.fill();
}

let phase = 0;

function loop() {
    requestAnimationFrame(loop);
    drawWave(phase);
    phase += 0.05;
}

loop();