const canvas = document.getElementById('c1');

const criarTexto = () => {
    ctx = canvas.getContext('2d');

    //Aplicando sombra
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'

    ctx.fillStyle = 'rgba(180, 60, 240, 0.9)';
    //definir tamanho da font: tamanho font family
    ctx.font = '35px Verdana';
    
    //alinhando texto
    ctx.textAlign = 'center';
    
    //método para criar textos: fillText(text, posX, posY)
    ctx.fillText('Hello Word', c1.width / 2, 40);
    //ctx.strokeText('Hello Word', 10, 40)
}

const grid = () => {
    const ctx = canvas.getContext('2d');
    for (let y = 0; y < 1600; y += 10) {
        ctx.beginPath();
        ctx.moveTo(0.5 + y, 0);
        ctx.lineTo(0.5 + y, 1500);
        ctx.strokeStyle = '#ccc';
        ctx.stroke();
    }

    for (let x = 0; x < 1500; x += 10) {
        ctx.beginPath();
        ctx.moveTo(0, x + 0.5);
        ctx.lineTo(1600, x + 0.5);
        ctx.strokeStyle = '#ccc';
        ctx.stroke();
    }
}

const main = () => {
    if (canvas.getContext) {
        grid();
        criarTexto();
    } else {
        console.log('Navegador sem suporte ao canvas')
    }
    
}

main();