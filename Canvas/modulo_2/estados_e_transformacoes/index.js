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


const transformacoes_translacao = () => {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 120, 120);
    //params para translate(posX, posY);
    ctx.translate(50, 50);
    //após a chamada do método translate, deve-se chamar o desenho da figura.
    //A translação acrescenta posX e posY incremental na figura que foi desenhada.
    ctx.fillStyle = 'orange';
    ctx.fillRect(0, 0, 120, 120);
}

const transformacoes_escala = () => {
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.arc(100, 100, 40, 0, Math.PI*2, true);
    ctx.fill();
    //params para scale(% alteração da largura, % alteração da altura);
    ctx.scale(0.5, 0.5);
    //após a chamada do método scale, deve-se chamar o desenho da figura.
    //A escala acrescenta na largura e altura da figura que foi desenhada.
    ctx.fillStyle = 'pink';
    ctx.beginPath();
    ctx.arc(50, 50, 40, 0, Math.PI*2, true);
    ctx.fill();
}

const transformacoes_rotate = () => {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#333';
    ctx.fillRect(50, 50, 120, 120);
    ctx.rotate(45);
    //após a chamada do método rotate, deve-se chamar o desenho da figura.
    //A rotação gira a figura em torno do seu próprio eixo.
    ctx.fillRect(280, 50, 120, 120);
}


const restaurar_estado_canvas = () => {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#333';
    ctx.fillRect(50, 50, 120, 120);
    ctx.save();
    ctx.rotate(45);
    ctx.fillStyle = 'pink';
    ctx.restore();
    ctx.fillRect(280, 50, 120, 120);
}

const main = () => {
    if (canvas.getContext) {
        grid();
        // transformacoes_translacao();
        // transformacoes_escala();
        // transformacoes_rotate();
        restaurar_estado_canvas();
    } else {
        console.log('Navegador sem suporte ao canvas')
    }
    
}

main();