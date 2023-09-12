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

const globalCompositeOperation = () => {
    const ctx = canvas.getContext('2d');
    //figura 1 - circulo vermelho
    //Para este exemplo, a figura 1 representa a forma existente do canvas, chamada de destination
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
    ctx.fill();

    //Os valores do globalCompositeOperation irão afetar tanto o destination, quanto o source.
    //1 - source-out: Gera um efeito de máscara onde é pego apenas a diferença entre destination e source,
    //mostrando o lado do source.
    //2 - source-over: Gera um efeito de máscara onde a figura source se sobrepõe à destination
    //3 - source-in: Gera um efeito de máscara onde a figura source é mostrada, excluindo a destination, porém,
    //a source será preenchida com a intersecção entre source e destination. 
    //4 - source-atop: Gera um efeito de máscara onde mostra-se a intersecção entre source e destination e a diferença
    //entre a destination e source.
    //5 - destination-out: Gera um efeito de máscara onde é pego apenas a diferença entre destination e source,
    //mostrando o lado do destination.
    //6 - destination-over: Gera um efeito de máscara onde a figura destination se sobrepõe à source.
    //7 - destination-in: Gera um efeito de máscara onde a figura destination é mostrada, excluindo a source, porém,
    //a destination será preenchida com a intersecção entre destination e source.
    //8 - destination-atop: Gera um efeito de máscara onde mostra-se a intersecção entre destination e source e a diferença
    //entre a destination e source.
    //9 - lighter: Aplicará um preenchimento na intersecção entre destination e source
    //10 - copy: A source será implementada sozinha.
    //11 - xor: Removerá o preenchimento da intersecção entre destination e source
    ctx.globalCompositeOperation = 'copy';

    //figura 2 - circulo azul
    //Para este exemplo, a figura 2 representa a nova forma, chamada de source
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.arc(70, 75, 50, 0, Math.PI * 2, true);
    ctx.fill();

}

const metodo_clip = () => {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'blue';
    //delimitador da máscara
    ctx.rect(0, 0, 150, 150);
    ctx.stroke();
    //Qual instrução que vier após o clip será contida nas dimensões do rect original
    ctx.clip();

    ctx.fillRect(0, 0, 150, 150);
    //circulo mascarado
    ctx.fillStyle = 'pink';
    ctx.beginPath();
    ctx.arc(130, 130, 60, 0, Math.PI * 2, true);
    ctx.fill();
}
const main = () => {
    if (canvas.getContext) {
        // grid();
        // globalCompositeOperation();
        metodo_clip();
    } else {
        console.log('Navegador sem suporte ao canvas')
    }
    
}

main();