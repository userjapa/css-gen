# Primeiras Ideias

## REFERÊNCIAS
Flow Project Management - https://www.getflow.com/
Mirrored Atomicity - https://uxdesign.cc/mirrored-atomicity-ui-and-front-end-speaking-the-same-language-3ac5c2fe382b
The Unicorn Workflow - https://medium.com/re-write/the-unicorn-workflow-design-to-code-with-atomic-design-principles-and-sketch-8b0fe7d05a37

## CONTEÚDO
Qual o problema do mercado?
Entendemos que os fluxos de trabalho entre programadores e designers possuem um GAP no momento de tradução do design para o código, sendo que o designer no momento de estruturar os layouts para protótipos está executando uma função que gera conteúdo suficiente para que os elementos desenhados já possuam um código específico, porém o desenvolvedor possui a necessidade de traduzir as telas visuais no código manualmente. Algumas ferramentas de mercado já possuem a possibilidade de exportar os códigos referente somente à um único elemento, porém este não possui informações relativas ao todo - posicionamento, margin etc.

## Qual o objetivo da solução?
O objetivo com esse projeto é permitir o aproveitamento dessas informações que podem ser extraídas das plataformas de protótipo e design, para que a funcionalidade de extração dos códigos seja útil a ponto de criar uma espécie de "framework" ou biblioteca dos estilos registrados.
É interessante que fique claro para o desenvolvedor quais os elementos que estão sendo exportados no código, com a opção de ignorar elementos que não estão completos ou o designer opta por excluir da exportação
Verificar a possibilidade de integração contínua com GitHub ou outro gerenciador via API, commit automático no código do projeto

## Como é utilizado os sistemas de mercado?
A prática de designers que utilizam ferramentas como Figma, Sketch, Invisio Studio normalmente é registrar os elementos de seu Design System e categorizá-los na ferramenta (de acordo com as funcionalidades de cada). Após o registro é possível utilizar os elementos para a criação de telas, que podem se tornar protótipos de alta fidelidade, nesses casos são aproveitados dados como medidas do elemento, código HEX da cor e algumas possíveis outras propriedades CSS que a ferramenta disponibiliza para que o designer compartilhe com o desenvolvedor.

Identificamos o problema nesse momento, no qual o desenvolvedor irá utilizar as imagens e poucas propriedades recebidas, é necessário escrever manualmente o código CSS para que o elemento seja implementado corretamente. Em outros casos o código fornecido pela ferramenta de design não é utilizado para nada, já que o time de desenvolvimento já possui um framework com seu design system (sendo que o mesmo não pode ser alterado pelos designers diretamente).

## Possíveis formas de solucionar o problema
Principais dores:

#### Designers 
- Não é possível administrar o Design System diretamente da ferramenta de design
- Não existe versionamento vinculado com a versão do código
- ? ...

#### Programadores
- O código recebido com os layouts não auxiliam no desenvolvimento
- É necessário desenvolver framework interno para automatizar o design system no desenvolvimento
? …

## Problemas secundários
Lista de problemas que possam gerar features (validar no mercado):
- Comunicação entre UX e designers gráficos, entregáveis de UX não vinculados ao Design System, podem gerar desenvolvimentos incompatíveis com usuários ou maior esforço de trabalho desnecessário para acessar informações

