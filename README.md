## Desafio InMetrics

## Description
Desafio InMetrics

Descritivo da Solução:

Um comerciante precisa controlar o seu fluxo de caixa diário com os lançamentos (débitos e créditos), também precisa de um relatório que disponibilize o saldo diário consolidado.

Requisitos de negócio:

•

Serviço que faça o controle de lançamentos

• Serviço do consolidado diário

Requisitos técnicos:

• Desenho da solução

• Pode ser feito na linguagem que você domina

• Boas praticas são bem vindas (Design Patterns, Padrões de Arquitetura, SOLID e etc)

• Readme com instruções de como subir a aplicação local, container e utilização dos serviços

Hospedar em repositório publico (GitHub)
 

## Api Architecture
![API Architecture](https://github.com/Eduardo-Wegner/InMetrics/blob/master/Diagrama_Aplica%C3%A7%C3%A3o.jpg?raw=true)
 

## Installation
Is necessary  install GIT, NPM, NodeJS, NestCLI and MongoDB ( standalone or with docker )

Requirements:

 - Git
 - NodeJS
 - NestCLI
 - MongoDB

```bash
#install NestCLI
$ npm i -g @nestjs/cli

# Dowload or Clone Project
[Projeto no GitHub](https://github.com/Eduardo-Wegner/InMetrics)

$ git clone git@github.com:Eduardo-Wegner/InMetrics.git

#Install all Dependencies
$  npm  install

```

  

## Running the app - DEVELOPMENT

  

```bash

# development

$  npm  run  start

  

# watch mode

$  npm  run  start:dev

  

```

  
## Running with docker
To use Docker you must install Docker and Docker Compose
```bash
$ docker-compose up -d --build

```


## Test

  

```bash

# unit tests

$  npm  run  test

  

# e2e tests

$  npm  run  test:e2e

  

# test coverage

$  npm  run  test:cov

``