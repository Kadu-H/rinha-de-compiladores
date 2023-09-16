# Rinha de Compiladores

Bem-vindo ao meu projeto, um projeto da [Rinha de Compiler](https://github.com/aripiprazole/rinha-de-compiler/) que visa interpretar a linguagem Rinha, transpilando o código.

## Funcionamento

Este interpretador utiliza uma Árvore Sintática Abstrata (AST) em JSON, fornecida pela Rinha para processar o código-fonte. Ele analisa os nós da AST e gera código JavaScript válido, que pode ser executado por meio da função `eval()`.

## Motivação

A ideia da Rinha de Compiler despertou meu interesse, especialmente porque sou relativamente novo na área da programação. Inicialmente, desenvolvi um interpretador em C++, mas meu código ficou confuso e tive erros alguns de retorno. Depois, tentei com JavaScript usando Node.js, mas também achei estranho. Por fim, decidi adotar uma abordagem diferente, criando um transpilador que resultou neste projeto.

### Requisitos

Para executar este projeto, você precisa ter o Node.js instalado em seu ambiente.

### Como Executar

1. Clone o projeto em seu ambiente local:

   ```bash
   git clone git@github.com:Kadu-H/rinha-de-compiladores.git
   ```
2. Navegue até o diretório clonado:
 
    ```bash
   cd rinha-de-compiladores
   ```
3. Execute:

    * Com Docker:
    ```bash
    docker build -t rinha_interprete .
    docker run rinha_interprete
    ```

    * Sem Docker:
    ```bash
    node execute.js