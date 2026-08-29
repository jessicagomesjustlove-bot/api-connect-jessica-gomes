# API Connect - Jessica Gomes

API REST desenvolvida com Node.js e Express para cadastro e gerenciamento de usuários.

## Objetivo

O projeto apresenta uma API REST simples para realizar operações de cadastro e consulta de usuários, utilizando requisições HTTP e respostas no formato JSON.

## Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- JSON
- Thunder Client para testes da API

## Como executar o projeto

1. Clone este repositório.
2. Abra a pasta do projeto no terminal.
3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor:

```bash
node server.js
```

A API estará disponível em:

```text
http://localhost:3000
```

## Endpoints

### GET /usuarios

Retorna todos os usuários cadastrados.

**Exemplo:**

```text
GET http://localhost:3000/usuarios
```

**Resposta esperada:**

```json
{
  "data": [
    {
      "id": 1,
      "nome": "Jessica",
      "email": "jessica@email.com",
      "dataCriacao": "2026-08-29T13:26:14.759Z"
    }
  ]
}
```

### POST /usuarios

Cadastra um novo usuário.

**Exemplo:**

```text
POST http://localhost:3000/usuarios
```

**Corpo da requisição:**

```json
{
  "nome": "Jessica",
  "email": "jessica@email.com"
}
```

**Resposta esperada:** HTTP 201 Created.

### Validação

O cadastro exige os campos `nome` e `email`.

Caso um deles não seja informado, a API retorna:

**HTTP 400 Bad Request**

```json
{
  "error": "Nome e e-mail são obrigatórios"
}
```

### GET /usuarios/:id

Busca um usuário pelo seu ID.

**Exemplo:**

```text
GET http://localhost:3000/usuarios/999
```

Quando o ID não existe, a API retorna:

**HTTP 404 Not Found**

```json
{
  "error": "Usuário não encontrado"
}
```

## Testes realizados

Foram realizados testes utilizando o Thunder Client, contemplando os seguintes cenários:

1. Criação de usuário com sucesso — HTTP 201 Created.
2. Falha na criação por ausência do e-mail — HTTP 400 Bad Request.
3. Listagem geral de usuários — HTTP 200 OK.
4. Busca de usuário inexistente — HTTP 404 Not Found.

## Estrutura do projeto

```text
api-connect-jessica-gomes/
├── dados.js
├── package.json
├── package-lock.json
├── primeiro.js
├── rotas.js
└── server.js
```

## Autora

Jessica Gomes

Projeto desenvolvido como atividade acadêmica de desenvolvimento back-end.
