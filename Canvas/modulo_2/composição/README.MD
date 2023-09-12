### Canvas

## Composição
### Propriedade global globalCompositeOperation
Esta propriedade permite gerar recorte em máscaras com objetos em sobreposição.
    - source-out: Gera um efeito de máscara onde é pego apenas a diferença entre destination e source, mostrando o lado do source.
    - source-over: Gera um efeito de máscara onde a figura source se sobrepõe à destination
    - source-in: Gera um efeito de máscara onde a figura source é mostrada, excluindo a destination, porém, a source será preenchida com a intersecção entre source e destination. 
    - source-atop: Gera um efeito de máscara onde mostra-se a intersecção entre source e destination e a diferença entre a destination e source.
    - destination-out: Gera um efeito de máscara onde é pego apenas a diferença entre destination e source,mostrando o lado do destination.
    - destination-over: Gera um efeito de máscara onde a figura destination se sobrepõe à source.
    - destination-in: Gera um efeito de máscara onde a figura destination é mostrada, excluindo a source, porém, a destination será preenchida com a intersecção entre destination e source.
    - destination-atop: Gera um efeito de máscara onde mostra-se a intersecção entre destination e source e a diferença entre a destination e source.
    - lighter: Aplicará um preenchimento na intersecção entre destination e source
    - copy: A source será implementada sozinha.
    - xor: Removerá o preenchimento da intersecção entre destination e source
### Método Clip
Esta propriedade é semelhante ao valor source-atop da propriedade global globalCompositeOperation, onde pode-se ocultar partes desnecessárias de um desenho contidas em outro.
O Método clip irá ocultar tudo que ultrapassar os limites da figura delimitadora.