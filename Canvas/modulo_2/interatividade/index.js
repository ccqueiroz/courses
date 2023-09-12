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

const interatividade = () => {
    const ctx = canvas.getContext('2d');
    canvas.addEventListener('mousemove', mouseMove);
    function mouseMove() {
        let posX = Math.random() * canvas.width;
        let posY = Math.random() * canvas.height;
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(posX, posY, 5, 0, Math.PI * 2, true);
        ctx.fill();
    }
}
const main = () => {
    if (canvas.getContext) {
        grid();
        interatividade();
    } else {
        console.log('Navegador sem suporte ao canvas')
    }
    
}

main();