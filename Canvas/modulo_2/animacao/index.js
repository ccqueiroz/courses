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

const animacao = () => {
    const ctx = canvas.getContext('2d');
    let posX = 10;
    let posY = 10;
    function animaRect() {
        ctx.clearRect(0, 0, 600, 600);
        ctx.fillStyle = '#99ccff';
        ctx.fillRect(posX, posY, 120, 120);
        posX += 1;
        posY += 1;

        if (
            posX >= canvas.width - 120 || 
            posY >= canvas.height - 120
        ) {
            clearInterval(interval);
        }
    }

    let interval = setInterval(animaRect, 10);
}
const main = () => {
    if (canvas.getContext) {
        grid();
        animacao();
    } else {
        console.log('Navegador sem suporte ao canvas')
    }
    
}

main();