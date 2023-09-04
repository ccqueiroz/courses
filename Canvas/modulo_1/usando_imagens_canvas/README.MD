### Canvas

## Redesenhando imagens

# Manipular imagens
 - Inserir a imagem por elemento de marcação HTML ou usando Javascript
 - Javascript usa-se o método new Image();
 - O método drawImage será responsável por desenhar a imagem: drawImage(instância de Image, posX, posY, width, height);
 - Diferenças de renderização de imagens por canvas e img:
    - Renderizar pelo canvas poderá trazer mais performance devido à aceleração gráfica;
    - Renderizar pelo canvas deixará aberto à manipulações mais dinâmicas com a estrutura HTML;
    - Renderizar pelo canvas fará com que a imagem não seja SEO-Friendly e não terá os recursos totais de acessibilidade.

# Recortando imagens
 - Extraindo uma parte da imagem e redesenhando-a no canvas;
  - O método drawImage será responsável por desenhar a imagem: drawImage(instância de Image, posX1, posY1, width1, height1, posX2, posY2, width2, height2), onde:
   - posX1, posY1, width1, height1 referêm-se ao recorte da imagem;
   - posX2, posY2, width2, height2 referêm-se à posição onde a imagem será redesenhada;