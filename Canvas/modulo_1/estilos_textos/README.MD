### Canvas

## Estilos de Textos

# Aplicar estilos aos textos
    - O método para criar texto é fillText: fillText(text, posX, posy);
    - Para determinar as cores do texto, usa-se o atributo fillStyle;
    - O método strokeText pode ser usado para criar contornos dos textos: strokeText(text, posX, posY);
    - Para definir tamanho da fonte e/ou família da font, usa-se ctx.font = '35px Verdana';
    - Para alinhar um texto, deve-se se usar ctx.textAlign = 'left' | 'center' | 'right', também deve-se passar para a largura do texto valor dinâmico da largura do contexto que o comporta.
        - ctx.fillText('Hello Word', c1.width / 2, 40);
    - Para aplicar sombras no texto, usa-se:
        - Deslocamento da sombra no eixo X: ctx.shadowOffsetX = 2;
        - Deslocamento da sombra no eixo Y: ctx.shadowOffsetY = 2;
        - Blur: ctx.shadowBlur = 2;
        - Cor da sombra: ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'

