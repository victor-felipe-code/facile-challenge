# Challenge Encriptador – Backend
## api backend para encriptar string e salvar no banco de dados encriptada

<h4 align="center"> 
	Em produção
</h4>

### Features

- [x] Configuração servidor express
- [x] Configuração orm prisma
- [x] Encriptar string
- [x] Desencriptar string
- [x] Persistir string encriptada no banco de dados
- [x] Validação de parametros da rota


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [PostgreSQL](https://www.postgresql.org/download/),
para fazer as requisições no servidor você pode utilizar a extensão do vscode [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) ou instalar na sua máquina o
[Postman](https://www.postman.com/downloads/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## Utilizando o Back End em produção publicado no Heroku
  - Utilize as seguintes rotas
    - Para inserir utilize a rota [POST] https://backend-facile-challenge.herokuapp.com/encrypts no body da requisição adicione o seguinte { "name": "coloque sua string aqui" }
    - Para consultar utilizar a rota [GET] informando um id de um registro https://backend-facile-challenge.herokuapp.com/encrypts/:id,  

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/victor-felipe-code/facile-challenge>

# Acesse a pasta do projeto no terminal/cmd
$ cd facile-challenge

# Instale as dependências
$ npm install

# Crie um arquivo .env na pasta raiz do projeto e adicione as seguintes variaveis
  # PORT=3000
  # DATABASE_URL="postgresql://<nome do usuário>:<senha do usuário>@localhost:5432/encrypted?schema=public"
  # SECRET_KEY=ABC123

# Encerre qualquer aplicação que esteja utilizando a porta 3000
# Execute a aplicação em modo de desenvolvimento
$ npm run dev:prisma

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
# Para salvar uma frase no banco utilize a rota post <http://localhost:3000/encrypts>, no body da requisição adicione o seguinte { "name": "coloque sua string aqui" }
# Para consultar utilize a rota get <http://localhost:3000/encrypts/:id>.
```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Cors](https://github.com/expressjs/cors)
- [Crypto-js](https://github.com/brix/crypto-js)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Helmet](https://helmetjs.github.io/)
- [Validator](https://github.com/validatorjs/validator.js)
- [Babel](https://github.com/babel/babel)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

#

<img src="https://img.shields.io/apm/l/vim-mode?color=7159c1&label=license&logo=MIT&logoColor=GHOST">
