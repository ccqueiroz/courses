const canvas = document.getElementById('c1');

const aplicarCorRadialGradient = () => {
    const ctx = canvas.getContext('2d');

    ctx.beginPath();

    //O método createRadialGradient possui 2 círculos: Inicial e final, que dentro das dimensões passadas
    //irá expandir as cores.
    //params createRadialGradient(posInicialX, posInicialY, raio, posFinalX, posFinalY, raio);
    const radialGradient = ctx.createRadialGradient(50, 150, 5, 50, 150, 30);
    //addColorStop gera faixas de cores, 0 a 100% dentro das dimensões do radial.
    //params addColorStop(porcentagem do preenchimento, cor)
    radialGradient.addColorStop(0, "green");
    radialGradient.addColorStop(0.5, "yellow");
    radialGradient.addColorStop(1, "red");
    ctx.fillStyle = radialGradient;
    ctx.arc(50, 150, 30, 0, Math.PI * 2, true);
    ctx.fill();
}

const aplicarCorRadialGradientAlpha = () => {
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    const radialGradientAlpha = 'rgba(80, 210, 150, 0.6)';
    //const radialGradientAlpha = 'rgb(80, 210, 150)';
    //ctx.strokeStyle = 'rgb(80, 210, 150)';

    ctx.fillStyle = radialGradientAlpha;
    ctx.arc(350, 40, 30, 0, Math.PI * 2, true);
    ctx.fill();
}

const definindoOpacidade = (opacity) => {
    const ctx = canvas.getContext('2d');
    ctx.globalAlpha = opacity;
}

const aplicarCorLinearGradient = () => {
    const ctx = canvas.getContext('2d');

    //params createRadialGradient(posInicialX, posInicialY, posFinalX, posFinalY, raio);
    const linearGradient = ctx.createLinearGradient(25, 50, 300, 190);
    //addColorStop gera faixas de cores, 0 a 100% dentro das dimensões do radial.
    //params addColorStop(porcentagem do preenchimento, cor)
    linearGradient.addColorStop(0, "green");
    linearGradient.addColorStop(0.7, "yellow");
    linearGradient.addColorStop(0.9, "red");
    ctx.fillStyle = linearGradient;
    ctx.fillRect(25, 190, 300, 90);
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
        definindoOpacidade(0.5);
        aplicarCorRadialGradient();
        definindoOpacidade(0.7);
        aplicarCorLinearGradient();
        aplicarCorRadialGradientAlpha();
    } else {
        console.log('Navegador sem suporte ao canvas')
    }
    
}

main();