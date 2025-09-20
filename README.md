# API RESTful Gerenciamento de Usuários - DNC
![Status](https://img.shields.io/badge/Status-Finalizado-brightgreen)
![NestJS](https://img.shields.io/badge/NestJS-9.0.0-red?logo=nestjs)
![TypeORM](https://img.shields.io/badge/TypeORM-enabled-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue?logo=postgresql)
![Passport](https://img.shields.io/badge/Passport-enabled-green)
![JWT](https://img.shields.io/badge/JWT-authentication-yellow)
![bcrypt](https://img.shields.io/badge/bcrypt-encrypted-blue)
![Prettier](https://img.shields.io/badge/Prettier-enabled-yellow)
![ESLint](https://img.shields.io/badge/ESLint-enabled-purple)
![Jest](https://img.shields.io/badge/Jest-tested-red)
![API](https://img.shields.io/badge/API-RESTful-blue)
![GitHub](https://img.shields.io/badge/GitHub-Repo-black)

## 📋 Descrição

Esta aplicação é uma API RESTful desenvolvida em **NestJS** para gerenciar dados de usuários e autenticação de acesso, como parte de um desafio avaliativo da escola DNC. O objetivo é fornecer uma base segura, escalável e eficiente para operações de cadastro, consulta, atualização e remoção de usuários, além de implementar autenticação robusta utilizando JWT.

## 🚀 Funcionalidades Atendidas

- **CRUD de Usuários:**  
  Permite criar, listar, buscar por ID, atualizar e remover usuários do banco de dados.
- **Campos do Usuário:**  
  Cada usuário possui os campos: `id`, `name`, `username`, `email`, `password` e `created_at`.
- **Senha Criptografada:**  
  As senhas são armazenadas de forma segura utilizando o algoritmo `bcrypt`.
- **Autenticação JWT:**  
  Login de usuários com geração de token JWT. Rotas protegidas exigem autenticação via token.
- **Proteção de Rotas:**  
  Apenas usuários autenticados podem acessar as rotas de listagem, busca, atualização e remoção de usuários.
- **Banco de Dados Relacional:**  
  Utiliza PostgreSQL com TypeORM para persistência dos dados.


## 🛠️ Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [Passport](http://www.passportjs.org/) & [JWT](https://jwt.io/)


## 📦 Instalação e Execução

1. **Clone o repositório:**
   ```
   git clone <link-do-repositorio>
   ```

2. **Instale as dependências:**
   ```
   npm install
   ```

3. **Configure o arquivo `.env`:**
   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=sua_senha
   DB_DATABASE=nome_do_banco
   JWT_SECRET=seuSegredoJWT
   ```

4. **Crie o banco de dados no PostgreSQL** (caso ainda não exista):
   ```sql
   CREATE DATABASE nome_do_banco;
   ```

5. **Execute a aplicação:**
   ```
   npm run start:dev
   ```


## 📚 Exemplos de Uso

### Criar Usuário

**POST** `/user`  
Body:
```json
{
  "name": "João Silva",
  "username": "joaosilva",
  "email": "joao@email.com",
  "password": "senhaSegura123"
}
```

### Login

**POST** `/auth/login`  
Body:
```json
{
  "email": "joao@email.com",
  "password": "senhaSegura123"
}
```
Resposta:
```json
{
  "access_token": "seu.jwt.token.aqui"
}
```

### Rotas protegidas

Atenção: Todas as rotas abaixo exigem autenticação JWT. Após fazer login, utilize o token retornado no header das requisições.
```
Authorization: Bearer <access_token>
/user - GET para busca de todos os usuários
/user/:id - GET para busca de usuários através do ID
/user/:id - PATCH para update de usuário através do ID
/user/:id - DELETE para excluir usuário através do ID
```

## 📝 Finalidade

Este projeto foi desenvolvido como parte do desafio avaliativo da escola DNC, com o objetivo de demonstrar conhecimentos em:
- Estruturação de APIs RESTful seguras e escaláveis
- Manipulação de banco de dados relacional com TypeORM
- Implementação de autenticação robusta com JWT
- Boas práticas de segurança e organização de código


🔹 Projeto criado para aprendizado e prática! 🚀 Sinta-se à vontade para contribuir ou sugerir melhorias. 😊