const canvas = document.getElementById('c1');

const grid = () => {
    const ctx = canvas.getContext('2d');
    for (let y = 0; y < 600; y += 10) {
        ctx.beginPath();
        ctx.moveTo(0.5 + y, 0);
        ctx.lineTo(0.5 + y, 500);
        ctx.strokeStyle = '#ccc';
        ctx.stroke();
    }

    for (let x = 0; x < 500; x += 10) {
        ctx.beginPath();
        ctx.moveTo(0, x + 0.5);
        ctx.lineTo(600, x + 0.5);
        ctx.strokeStyle = '#ccc';
        ctx.stroke();
    }
}

const video = () => {
    const ctx = canvas.getContext('2d');
    let intervalVideo;
    const videoElement = document.getElementsByTagName('video')[0];
    videoElement.addEventListener('play', function () {
        intervalVideo = setInterval(function() {
            ctx.drawImage(videoElement, 5, 5, 500, 300);
        }, 20)
    })
}

const main = () => {
    if (canvas.getContext) {
        grid();
        video();
    } else {
        console.log('Navegador sem suporte ao canvas')
    }
    
}

main();