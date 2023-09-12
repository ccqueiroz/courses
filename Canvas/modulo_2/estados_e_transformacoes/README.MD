### Canvas

## Estados e Transformações
- Transformações representam:
    - Escalas: 0 a 100%;
         - O método que executa a escala é ctx.scale(scaleX, scaleY);
    - Rotação: graus;
        - O método que executa a rotação é ctx.rotate(graus);
    - Translação: 
        - O método que executa a translação é ctx.translate(posX, posY);

## Manipulando estados
Manipulação de estados significa retornar objetos que já foram retornados e características que já foram configuradas anteriormente.
- Para salvar (armazenamento de pilha) um dado comportamento usa-se o ctx.save(). Esta instrução fará com que o canvas armazene as informações da figura desenhada.
- Para restaurar (restaura um estado mais recente (pilha)) um comportamento/figura, use-se o ctx.restore(). Por ter comportamento de pilha, toda vez que usa-se o método ctx.restore(), é restaurada uma configuração mais recente da pilha.