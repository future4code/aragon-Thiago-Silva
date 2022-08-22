# Projeto Cookenu

Sistema simples de receitas culinárias que permite o registro, acesso e manipulação de usuários e receitas.

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

### Funcionalidades básicas

Teste de API
Signup
Get all users
Delete user
Create recipe
Get all recipes
Edit recipe 
Delete recipe

## Tecnologies
</br>
<img width="350" alt="tecnologies" src="https://user-images.githubusercontent.com/95821657/180657012-323ecb67-c980-4b56-a3ce-4131da26ecd7.png">

## Tools
</br>
<img width="340" alt="tools" src="https://user-images.githubusercontent.com/95821657/180657619-7f01d31c-7a12-4174-8eac-7abca6ba1ee4.png">

## Documentação Postman
Para ver a documentação, clique aqui: [Postman](https://documenter.getpostman.com/view/20784974/VUjMo61L)

## Deploy - Heroku
Para acessar o deploy da aplicação, clique aqui: [Heroku](https://app-cookenu.herokuapp.com/ping) 

### Autor
Thiago Vernizzi, 2022/08/07 (Aragon Team - Labenu)
<br/>
[Contact by email ](mailto:thiago.vernizzi@gmail.com) or
https://www.linkedin.com/in/thiagovernizzi/
