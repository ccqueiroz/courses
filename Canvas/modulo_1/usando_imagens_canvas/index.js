const canvas = document.getElementById('c1');

const redesenhandoImagens = () => {
    const ctx = canvas.getContext('2d');

    const img = new Image();

    img.onload = function () {
        //params drawImage(imagem, posX, posY, width, height)
        ctx.drawImage(img, 0, 520, 1000, 666)
    }

    img.src = 'assets/img4k.png';
}

const recortandoImagens = () => {
    const ctx = canvas.getContext('2d');

    const img = new Image();

    img.onload = function () {
        //params drawImage(imagem, posX1, posY1, width1, height1, posX2, posY2, width2, height2)
        //Os primeiros 4 argumentos serão para determinar a área da imagem que se deseja recortar
        //Os últimos 4 argumentos serão usados para posicionar a área recortada na tela.
        ctx.drawImage(img, 250, 0, 400, 500, 0, 0, 500, 500);
    }
    img.src = 'assets/img4k.png';
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
        recortandoImagens();
        redesenhandoImagens();
    } else {
        console.log('Navegador sem suporte ao canvas')
    }
    
}

main();