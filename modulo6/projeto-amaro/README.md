<img width="174" alt="image" src="https://user-images.githubusercontent.com/95821657/189329591-685b32e3-398a-44de-874b-85a0985e9791.png">
<img width="350" alt="gif amaro" src="https://user-images.githubusercontent.com/95821657/189331589-fc513cfe-4051-4262-9140-4d0dcd9e6c15.gif">


Amaro-Project is a simplified application with the following functionalities: register user, log in, register, consult, edit and delete products (CRUD):

- Get API test.
- Post Signup.
- Post Login.
- Get products.
- Get products by name or id.
- Create a new product.
- Edit a product.
- Delete Product.

## Installing the app
- npm install: installs the dependencies used in project development
- npm run dev: Run application

## .env file
create the .env file
configure with your database information:
- PORT: 3003 
- DB_HOST = host 
- DB_USER = user 
- DB_PASSWORD = password
- DB_DATABASE = database-name
- JWT_KEY = password 
- JWT_EXPIRES_IN = token duration (example: 24h = 24h) 
- BCRYPT_SALT_ROUNDS = 12

## Create and populate tables
- npm run migrations = Create and populate the tables in the database based on the data.ts file

## Testes unitários
- npm run test
<img width="533" alt="image" src="https://user-images.githubusercontent.com/95821657/189227791-73750646-2ac7-44ed-89d5-383ec1ad21f7.png">

## Automação de testes com coverage
npm run test -- --collect-coverage
O relatório principal fica em ./coverage/lcov-report/index.html
<img width="956" alt="image" src="https://user-images.githubusercontent.com/95821657/189227439-560124c6-2c11-431c-b2b2-12f113b7faab.png">

## Technologies
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

## Autor
Thiago Vernizzi, 2022/09/08 (Aragon Team - Labenu)
Contact by email or https://www.linkedin.com/in/thiagovernizzi/

### Heroku
[Click here](https://projeto-amaro-app.herokuapp.com/ping)

### Postman Documentation
[Click here]()
