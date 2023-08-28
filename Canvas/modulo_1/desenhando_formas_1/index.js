const canvas = document.getElementById('c1');

const retangulo = () => {
    const ctx = canvas.getContext('2d'); //pega o contexto 2d
    ctx.fillStyle = "green";
    //params fillRect: posX, posY, lar, alt
    ctx.fillRect(20, 50, 250, 120);
    //espessura da linha
    ctx.lineWidth = '4';
    //cor do contorno
    ctx.strokeStyle = 'red';
    //aplicação do contorno
    ctx.strokeRect(20, 50, 250, 120);


}

const circulo = () => {
    const ctx = canvas.getContext('2d');
    //informa que está iniciando a montagem do círculo
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.lineWidth = '3';
    ctx.strokeStyle = 'red';
    //params arc: posX, posY, raio, angInicial, angFinal, boolean para quando o circulo é fechado ou não.
    ctx.arc(20, 20, 10, 0, Math.PI*2, true);
    //dar a instrução de preenchimento.
    ctx.fill();
    //chama o método stroke para aplicar as definições.
    ctx.stroke();
}

const linha = (posInicialX, posInicialY, posFinalX, posFinalY, lineCap) => {
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    //params moveTo: posX, posY - posições iniciais
    ctx.strokeStyle = 'purple';
    ctx.moveTo(posInicialX, posInicialY);
    //params lineTo: posX, posY - posições finais
    ctx.lineTo(posFinalX, posFinalY);
    ctx.lineWidth = '10';
    ctx.lineCap = lineCap;
    ctx.stroke();
}

const interseccaoLinhas = (posInicialX, posInicialY, posFinalX, posFinalY, lineJoin) => {
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    //params moveTo: posX, posY - posições iniciais
    ctx.lineWidth = '10';
    ctx.strokeStyle = 'purple';
    ctx.moveTo(posInicialX, posInicialY);
    //params lineTo: posX, posY - posições finais
    ctx.lineTo(posFinalX, posFinalY);
    ctx.lineTo(posFinalX - 30, posFinalY - 30);
    ctx.lineJoin = lineJoin;
    ctx.stroke();
}

const main = () => {
    if (canvas.getContext) {
        retangulo();
        circulo();
        linha(10, 400, 300, 400, 'butt');
        linha(10, 450, 300, 450, 'square');
        linha(10, 480, 300, 480, 'round');

        interseccaoLinhas(20, 220, 300, 220, 'miter');
        interseccaoLinhas(20, 280, 300, 280, 'round');
        interseccaoLinhas(20, 340, 300, 340, 'bevel');
    } else {
        console.log('Navegador sem suporte ao canvas')
    }
    
}

main();