### Canvas

## Estilos e Cores

# Aplicar cores aos objetos
### Radial Gradient
    - Para criar um radial Gradient usa-se o método createRadialGradient: createRadialGradient(posInicialX, posInicialY, raio, posFinalX, posFinalY, raio);
    - Deve-se estabelecer quais as cores que serão geradas, para isso, chame-se da instância do createRadialGradient, o método addColorStop: addColorStop(porcentagem de cor, cor);
    - Por fim, repassa a instância do createRadialGradient ao ctx.fillStyle.
### Linear Gradient
    - Para criar um radial Gradient usa-se o método createRadialGradient: createRadialGradient(posInicialX, posInicialY, posFinalX, posFinalY);
    - Deve-se estabelecer quais as cores que serão geradas, para isso, chame-se da instância do createLinearGradient, o método addColorStop: addColorStop(porcentagem de cor, cor);
    - Por fim, repassa a instância do createLinearGradient ao ctx.fillStyle.
### Aplicação de opacidade
    - A opacidade pode ser aplicada usando o atributo global, ctx.globalAlpha = opacidade;
    - A opacidade pode ser aplicada também passando rgba para o fillStyle: ctx.fillStyle = 'rgba(red, green, blue, opacity)'.