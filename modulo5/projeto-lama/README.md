# Projeto LAMA - Labenu Music Awards

O projeto LAMA é um aplicativo rede social com o objetivo de promover a conexão e interação entre seus mais diversos usuários, com as seguintes funcionalidades básicas:

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

### Automação de testes com coverage
- npm run test -- --collect-coverage

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
Para ver a documentação, clique aqui: [Postman](https://documenter.getpostman.com/view/20784974/VUjSGjZf)

## Deploy - Heroku
Para acessar o deploy da aplicação, clique aqui: [Heroku](https://labook-app.herokuapp.com/ping) 

### Autor
Thiago Vernizzi, 2022/08/14 (Aragon Team - Labenu)
<br/>
[Contact by email ](mailto:thiago.vernizzi@gmail.com) or
https://www.linkedin.com/in/thiagovernizzi/