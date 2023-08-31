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

const curvas = () => {
    const ctx = canvas.getContext('2d');
    ctx.beginPath();

    ctx.strokeStyle = 'brown';
    ctx.lineWidth = '8';

    ctx.moveTo(100, 20);
    ctx.lineTo(200, 160);
     //params lineTo: posX, posY, posX1ControleCurva, posY1ControleCurva
    ctx.quadraticCurveTo(230, 200, 250, 100);
    //params lineTo: posX, posY, posX1ControleCurva, posY1ControleCurva, posX2ControleCurva, posY2ControleCurva
    ctx.bezierCurveTo(290, -40, 300, 200, 400, 150);

    // ctx.lineTo(500, 90);
    ctx.stroke();
}

const balao = () => {
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'brown';
    ctx.lineWidth = '2';

    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(200, 110, 200, 62.5);
    ctx.quadraticCurveTo(200, 17, 75, 25);

    ctx.stroke();

}

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

const coracao = () => {
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = '2';

    ctx.moveTo(75, 200);
    ctx.lineTo(50, 175);
    ctx.lineTo(30, 200);
    ctx.lineTo(30, 220);
    ctx.lineTo(75, 280);
    ctx.lineTo(120, 220);
    ctx.lineTo(120, 200);
    ctx.lineTo(100, 175);
    ctx.lineTo(75, 200);

    ctx.moveTo(75, 40);

    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(25, 25, 25, 60, 26, 60);
    ctx.bezierCurveTo(30, 80, 75, 110, 75, 120);
    ctx.bezierCurveTo(135, 60, 120, 60, 123, 60);
    ctx.bezierCurveTo(126, 40, 120, 50, 125, 45);
    ctx.bezierCurveTo(120, 45, 120, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.strokeStyle = 'purple';
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke();
}

const main = () => {
    if (canvas.getContext) {
        grid();
        // retangulo();
        // circulo();
        // linha(10, 400, 300, 400, 'butt');
        // linha(10, 450, 300, 450, 'square');
        // linha(10, 480, 300, 480, 'round');

        // interseccaoLinhas(20, 220, 300, 220, 'miter');
        // interseccaoLinhas(20, 280, 300, 280, 'round');
        // interseccaoLinhas(20, 340, 300, 340, 'bevel');

        // curvas();
        // balao();
        coracao();
    } else {
        console.log('Navegador sem suporte ao canvas')
    }
    
}

main();