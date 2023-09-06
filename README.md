Toda documentação pode ser vistam em: ttps://sequelize.org/docs/

COMO RODAR O PROJETO BAIXADO
CRIAÇÃO DE PASTAS
controller (arquivos: contactMessage.js e home.js) dentro da pasta o arquivo home só é digitado após a criação dos arquivos da models

models


1ª Passo rodar as dependências
Instalar todas as dependencias indicada pelo package.json
### npm install

2ª criar a base de dados ou reconfigurar a que já esta feita
Criar a base de dados "cobaia" no MySQL
Alterar as credencias do banco de dados no arquivo ".env"

3ª alterar as dependencias do arquivo .env


4ª Executar a migrations para criar as tabelas

### npx sequelize-cli db:migrate



5ª Executar as seeders, ou seja, executar informações na tabela) criar registro
### npx sequelize-cli db:seed:all


6ª Rodar o projeto usando o nodemon
### nodemon app.js


OBS: o arquivo home.js é uma controller..

FIM

MAIS DICAS


Abrir o endereço no navegador para acessar a página inicial
### http://localhost:8080/home



SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init

Gerencia as requisições, rotas e URLs, entre outra funcionalidades
### npm install --save express

Instalar a dependência de forma global, "-g" significa globalmente. Executar o comando através do prompt de comando, executar somente se nunca instalou a dependência na maquina, após instalar, reiniciar o PC.
### npm install -g nodemon

Instalar a dependência como desenvolvedor para reiniciar o servidor sempre que houver alteração no código fonte.
### npm install --save-dev nodemon

Rodar o projeto usando o nodemon
### nodemon app.js

Abrir o endereço no navegador para acessar a página inicial
### http://localhost:8080

Comando SQL para criar a base de dados
### CREATE DATABASE cobaia CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; 

Sequelize é uma biblioteca Javascript que facilita o gerenciamento do banco de dados SQL
### npm install --save sequelize

Instalar o drive do banco de dados
### npm install --save mysql2

Sequelize-cli interface de linha de comando usada para criar modelos, configurações e arquivos de migração para bancos de dados
### npm install --save-dev sequelize-cli

Iniciar o Sequelize-cli e criar o arquivo config
### npx sequelize-cli init

Manipular variáveis de ambiente
### npm install dotenv --save

Criar a migration da página home do conteúdo do topo 
### npx sequelize-cli migration:generate --name create-homes-tops

Criar a migration acrescentar a coluna imageTop
### npx sequelize-cli migration:generate --name alter-homes-tops-add-imagetop

Executar as migrations
### npx sequelize-cli db:migrate

Executar down - rollback - Permite que seja desfeita a migration, permitindo a gestão das alterações do banco de dados e versionamento.
### npx sequelize-cli db:migrate:undo --name nome-da-migration

Criar a Models da página home do conteúdo do topo 
### npx sequelize-cli model:generate --name HomesTops --attributes titleOneTop:string,titleTwoTop:string,titleThreeTop:string,linkBtnTop:string,textBtnTop:string,imageTop:string

Criar seeders
### npx sequelize-cli seed:generate --name demo-homestops

Executar as seeders
### npx sequelize-cli db:seed:all

Executar uma seed
### npx sequelize-cli db:seed --seed nome-da-seed

Executar down - rollback - Permite que seja desfeita todas as seed, permitindo a gestão das alterações do banco de dados e versionamento.
### npx sequelize-cli db:seed:undo

Executar down - rollback - Permite que seja desfeita uma única seed, permitindo a gestão das alterações do banco de dados e versionamento.
### npx sequelize-cli db:seed:undo --seed nome-da-seed
