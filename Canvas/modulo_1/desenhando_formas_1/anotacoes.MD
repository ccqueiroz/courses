### Canvas

## Suporte
- getContext: Verifica se há contexto do canvas

## Criando retângulos
```html
    <canvas id="c1" width="600" height="500"></canvas>
```
- Define-se o contexto: getContext('2d');
- Define cor de preenchimento: fillStyle = 'green';
- Desenha um retângulo = fillRect(posX, posY, lar, alt);
- Define espessura da linha de contorno = lineWidth = '6';
- Define contorno = strokeRect(posX, posY, lar, alt);
- Define cor do contorno = strokeStyle = 'red';

### Para desenhar uma forma geométrica, primeiro define-se as propriedades e posteriormente chama o método de desenho.

## Criando circulos - circulos são interpretados como segmentos de círculos/arcos.
- Método beginPath instrui que está iniciando a construção de um traçado;
- Desenha o círculo: arc(posX, posY, raio, angInicial, angFinal, circuloFechado);
- Método fill instrui para que seja renderizado o desenho do círculo;
- Método stroke instrui para que seja renderizadas as instruções de contorno;

## Desenhando Linhas
- Método beginPath instrui que está iniciando a construção de um traçado;
- Método moveTo determina os pontos 2d iniciais: posX, posY;
- Método lineTo determina os pontos 2d finais: posX, posY;
- A cada lineTo, será considerado uma progressão da linha;
- Se posX do moveTo e do lineTo forem iguais, determina uma linha vertical;
- Se posY do moveTo e do lineTo forem iguais, determina uma linha horizontal.
- Define o tipo de acabamento: lineCap: 'butt' | 'square' | 'round';
- O acabamento da linha 'butt', é feito acabamento interno;
- O acabamento da linha 'square', é feito acabamento externo (extremidades totais);
- O acabamento da linha 'round', é feito acabamento de arrendondamento;
- Define tipos de acabamentos entre intersecções de linhas: lineJoin: 'miter' | 'round' | 'bevel'
- O acabamento da linha 'miter', é feito acabamento triangular entre as duas linhas;
- O acabamento da linha 'round', é feito acabamento arredondado entre as duas linhas;
- O acabamento da linha 'bevel', é feito acabamento reto entre as duas linhas;

