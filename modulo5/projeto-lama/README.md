
<img width="191" alt="logo lama" src="https://user-images.githubusercontent.com/95821657/185833296-73e2048e-01d6-4893-a94e-195c8d6a0be1.png">

# Projeto LAMA - Labenu Music Awards

![gifs-de-ondas-de-audio-24](https://user-images.githubusercontent.com/95821657/185833259-de5b45a3-0173-4aae-b2e7-8302917dfe73.gif)

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
<img width="349" alt="testes unitários projeto-lama" src="https://user-images.githubusercontent.com/95821657/185833350-0367245d-5fc1-4ff8-ad8b-24abec883b6a.png">

### Automação de testes com coverage
- npm run test -- --collect-coverage
- O relatório principal fica em ./coverage/lcov-report/index.html
<img width="957" alt="coverage tests projeto-lama" src="https://user-images.githubusercontent.com/95821657/185833395-c4270d3f-7193-4c30-88b8-c4532d988372.png">

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

LABENU MUSIC AWARDS - THE GREAT TIMES ARE COMING

https://www.youtube.com/watch?v=h_L4Rixya64
<br />
<img width="580" alt="foo fighters lama" src="https://user-images.githubusercontent.com/95821657/185833458-b14f06bb-8bb8-4812-b72e-aa2ec6c8b311.png">

Let's go party
![lama festival](https://user-images.githubusercontent.com/95821657/185971622-061ed9cc-97d9-4651-9a4a-5139152d27a6.jpg)
