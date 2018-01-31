# vue-cars

> Desafio Front-End | ContaAzul

```
Objetivo:​​Desenvolver mini aplicação para controle de frotas.
Descrição:​​O objetivo desse desafio é entender como você pensa e resolve problemas do dia a dia.
Para isso o desafio é desenvolver uma aplicação frontend (Não há necessidade de escrever a parte
backend) conforme os requisitos abaixo.

```

### Requisitos funcionais:
-  Desenvolver CRUD de cadastro de veículos.
-  Será possível realizar uma busca, filtrando os veículos por combustível e/ou marca.
- Na primeira execução trazer os veiculos da lista anexa.
- A lista de veículos deve apresentar 5 veículos por página.*
- Deve ser uma Single Page Application

> Objeto​​ veículo:
-  Placa*
- Imagem.
- Marca*
- Modelo*
- Combustível (Gasolina, Álcool, Flex)
- Valor
  *Campos obrigatórios

### Expectativas:
- Desenvolver aplicação com uma arquitetura Javascript que você acredite resolver o problema da
melhor forma possível. De atenção ao detalhes. Esse é o projeto que você colocaria em
produção.
- Você tem absolutamente total liberdade para utilização de frameworks, códigos abertos, plugins,
bibliotecas, qualquer decisão que quiser tomar.
- Siga perfeitamente o layout determinado.



> Carga inicial de dados

  [{ "combustivel" : "Flex",
      "imagem" : null,
      "marca" : "Volkswagem",
      "modelo" : "Gol",
      "placa" : "FFF-5498",
      “valor” : “20000”
    },
    { "combustivel" : "Gasolina",
      "imagem" : null,
      "marca" : "Volkswagem",
      "modelo" : "Fox",
      "placa" : "FOX-4125",
      “valor” : “20000”
    },
    { "combustivel" : "Alcool",
      "imagem" : "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
      "marca" : "Volkswagen",
      "modelo" : "Fusca",
      "placa" : "PAI-4121",
      “valor” : “20000”
  }]



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
