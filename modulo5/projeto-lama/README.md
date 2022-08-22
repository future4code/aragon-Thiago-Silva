![](../../../logo%20lama.png)
# Projeto LAMA - Labenu Music Awards

![](../../../gifs-de-ondas-de-audio-24.gif)

O Projeto LAMA (Labenu Music Awards) é um projeto backend construído para gerenciar os eventos e ingressos do festival, com as seguintes funcionalidades:

1- Teste de API;

2- Signup: criação de usuário;

3- Login;

4- Create show;

5- Get shows;

6- Reserve tickets;

7- Remove ticket reserves;

### Instalação das dependências

- npm install: instala as dependências utilizadas no desenvolvimento do projeto.

### Arquivo .env
- criar o arquivo .env 
- configurar com as informações do seu banco de dados:
PORT: 3003
DB_HOST = host
DB_USER = usuario
DB_PASSWORD = senha
DB_DATABASE = nome-do-banco-de-dados

JWT_KEY = senha 
JWT_EXPIRES_IN = duração do token (exemplo: 24h = 24horas)
BCRYPT_SALT_ROUNDS = 12

### Criar e popular tabelas
- npm run migrations
Cria e popula as tabelas no banco de dados com base no arquivo data.ts

### Executar o projeto
- npm run dev
Estabelece a conexão com o servidor e reinicia automaticamente a porta 3003 do localhost após cada atualização do código.

### Testes unitários
- npm run test
![](../../../testes%20unit%C3%A1rios%20projeto-lama.png)


### Automação de testes com coverage
- npm run test -- --collect-coverage
- O relatório principal fica em ./coverage/lcov-report/index.html

[](../../../coverage%20tests%20projeto-lama.png%0D) ![](../../../testes%20unit%C3%A1rios%20projeto-lama.png) 

## Tecnologies
- Node.js;
- Typescript;
- Express;
- Jest;
- Cors;
- Bcryptjs;
- Jsonwebtoken;
- Knex;
- Uuid;
- SQL;

## Tools
- Visual Studio Code;
- MySQL;
- Postman;
- Heroku;

## Documentação Postman
[Clique aqui](https://documenter.getpostman.com/view/20784974/VUqptd3D)

## Deploy - Heroku
[Clique aqui](https://app-lama-aragon.herokuapp.com/ping) 

### Autor
Thiago Vernizzi, 2022/08/22 (Aragon Team - Labenu)
<br/>
[Contact by email ](mailto:thiago.vernizzi@gmail.com) or
https://www.linkedin.com/in/thiagovernizzi/