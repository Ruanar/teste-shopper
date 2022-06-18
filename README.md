# TESTE TÉCNICO SHOPPER - DESENVOLVEDORA JR

Este projeto foi realizado como parte dos requisitos do processo seletivo para a vaga de desenvolvedor full stack jr na Shopper. O back end foi desenvolvido em NodeJS com Typescript e o front end em ReactJS. 
No back end, usei as libs express, cors, dotenv, knex, mysql e uuid. 
No front end, usei styled-components, axios e react-router-dom.
O banco de dados é o MySQL.

O deploy do back end foi feito no Heroku e pode ser encontrado no endereço
https://ruana-shopper-back.herokuapp.com/

O front end foi publicado no surge, no endereço 
http://ruana-shopper.surge.sh/

## Instruções para rodar localmente

### No terminal, executar os segintes comandos:
git clone https://github.com/Ruanar/teste-shopper.git

### Back end
cd back
npm install

### Front end
cd .. 
cd front
npm install

## Para rodar o servidor (back end)
Crie um arquivo .env e adicione as variáveis de ambiente. São elas:
DB_HOST = host do banco de dados
DB_USER = nome do usuário do banco de dados
DB_PASSWORD = senha de acesso ao banco de dados
DB_SCHEMA = schema do banco de dados
DB_PORT = 3306

rode no terminal o comando
npm run dev

