
O fluxo acontece da seguinte forma, a UI (Um componente) dispara uma ação (Adicionar um produto ao carrinho por exemplo).
Esta ação é manipulada pelos Reducers, que contém as regras de negócio como cálculo do total e afins, centralizando o código em um só lugar.
Os Reducers por sua vez alteram o armazenamento das informações, chamados de Stores, que por sua vez refletem no estado (State).
Com o State alterado, os componentes da tela são atualizados, e assim se repete o ciclo e desta forma temos as seguintes responsabilidades.

component > reducer > change store > state > update screen 


### Actions 

São as possíveis ações que temos para um item, no caso do carrinho de compras, ADD, REMOVE, CLEAR, para adicionar produtos, remover produtos e limpar o carrinho respectivamente.

### Reducers
São responsáveis receber uma ação e manipular ela, como por exemplo receber uma ação para adicionar um produto ao carrinho.

Neste caso, a ação vem com um “payload” (Uma carga, um pacote) junto, que são os dados para a ação ser completa, ou seja, o produto a ser adicionado ao carrinho.

O Reducer por sua vez, adiciona o produto ao Store e executa o cálculo para saber o total atual do pedido, armazenando-o também no Store.
Esses redutores (lembre-se de que são apenas funções puras) recebem uma ação e o estado, dependendo da ação despachada (geralmente com uma instrução switch), eles executam uma operação e retornam um novo objeto de estado.

Estado em um aplicativo redux é imutável! Portanto, quando um redutor altera algo no estado, ele retorna um novo objeto de estado.
Se essa ação não acionar um efeito, um redutor analisará a ação (geralmente usando uma instrução switch) e retornará um novo estado que será o resultado da mesclagem do estado antigo com o valor que foi alterado chamando o comando açao.

Redutores são funções puras que aceitam dois argumentos, o estado anterior e uma Ação. Quando uma ação é despachada, o ngrx passa por todos os redutores que passam como argumentos pelo estado anterior e pela ação, na ordem em que os redutores foram criados, até encontrar um caso para essa ação.

### Seletores…
Como mencionamos antes, a árvore de estados pode se tornar um objeto muito grande, não faz sentido ter todo esse objeto em locais onde precisamos apenas de parte dela.
A loja NGRX fornece a função “select” para obter fatias da nossa loja. Mas e se precisarmos aplicar alguma lógica a essa fatia antes de usar os dados nos componentes.
É aí que os seletores agem. Eles nos permitem dissociar qualquer transformação de dados de fatia de estado dos componentes. A função "select" da loja aceita um argumento como uma função pura, essa função pura é o nosso seletor.


### grx/store: implementação completa de uma biblioteca para controle de estado em aplicações Angular totalmente Redux-like que utiliza extensões reativas (RxJS) em sua base.
ngrx/effects: biblioteca responsável por lidar com “efeitos colaterais” (side-effects) causados por actions que realizam tarefas assíncronas (como requisições http por ex.), isolando o tratamento desses efeitos de funções puras responsáveis somente por cuidar de mudanças de estado.
ngrx/router-store: bindings para conectar a ngrx/store com o roteador do Angular (sim, podemos guardar os estados das rotas da aplicação na store também!)
ngrx/store-dev-tools: lib que possibilita utilizar a extensão Redux Dev Tools. É uma ferramenta que permite debugar em detalhes as mudanças de estado e que possui outros recursos interessantes, como navegar (voltar ou avançar) no tempo entre as mudanças ocorridas.

### effects
O último aspecto interessante que complementa as ferramentas trazidas pelo ngrx, é o uso de effects. Eles servem basicamente para lidarmos com os efeitos colaterais causados pelo dispatch de uma action. Neste contexto, podemos dizer que effects equivalem aos já conhecidos redux-saga ou o redux-thunk do mundo React. O que eles fazem aqui é agir como um middleware, interceptando o disparo de actions e nos possibilitando uma infinidade de opções, como modelar o estado resultante através de operadores RxJS ou até mesmo realizar o disparo de novas actions.


https://balta.io/blog/angular-redux-ngrx
https://movile.blog/construindo-aplicacoes-front-end-reativas-com-ngrx/
https://stackblitz.com/edit/angular-ngrx-effects?file=app%2Ftasks%2Fservices%2Ftasks.service.ts


# AngularReduxExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
